const assert=require('assert')
const ganache=require('ganache-cli')
const Web3=require('web3')
const web3=new Web3(ganache.provider())

const compiledfactory=require('../ethereum/build/CampaignFactory.json')
const compiledcampaign=require('../ethereum/build/Campaign.json')

let accounts;
let factory;
let campaignaddress;
let campaign;

beforeEach(async ()=>{
    accounts=await web3.eth.getAccounts();
    factory=await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
    .deploy({ data:compiledfactory.bytecode})
    .send({from :accounts[0],gas:'1000000'});

    await factory.methods.createcampaign('100').send({
        from:accounts[0],
        gas:'1000000'
    });

    const addresses=await factory.methods.getdeployedcampaigns().call();
    campaignaddress=addresses[0];
    campaign=new web3.eth.Contract(
        JSON.parse(compiledcampaign.interface),
        campaignaddress
    )
})

describe('Campaigns',()=>{
    it('deploys a factory and a campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    })
    it('makes caller the manager of campaign',async()=>{
        const manager=await campaign.methods.manager().call();
        assert.equal(accounts[0],manager);
    })
    it('allows people to contribute money and marks them as approvers',async()=>{
        await campaign.methods.contribute().send({
            from:accounts[1],
            value:'200'
        })
        const iscontributor=await campaign.methods.approvers(accounts[1]);
        assert(iscontributor);
    })
    it('requires a minimum contribution',async ()=>{
        try{
            await campaign.methods.contribute().send({
                value:'5',
                from : accounts[1]
            })
            assert(false);
        }
        catch(err){
            assert(err)
        }
    })
    it('allows manager to make payment request',async ()=>{
        await campaign.methods
            .createrequest('Buy batteries','100',accounts[1])
            .send({
                from:accounts[0],
                gas:'1000000'
            })
        const request=await campaign.methods.requests(0).call();
        assert.equal('Buy batteries',request.description)
    })
    it('processes request',async()=>{
        await campaign.methods.contribute().send({
            from:accounts[0],
            value:web3.utils.toWei('10','ether')
        });

        await campaign.methods
            .createrequest('A',web3.utils.toWei('5','ether'),accounts[1])
            .send({from : accounts[0],gas:'1000000'});
        
        await campaign.methods.approverequest(0).send({
            from:accounts[0],
            gas:'100000'
        });
        await campaign.methods.finalizerequest(0).send({
            from:accounts[0],
            gas:'100000'
        })

        let balance=await web3.eth.getBalance(accounts[1]);
        balance=web3.utils.toWei(balance,'ether');
        balance=parseFloat(balance);
        assert(balance>104);
    })
    

})
