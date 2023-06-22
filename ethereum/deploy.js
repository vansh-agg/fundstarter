const HDWalletProvider = require('@truffle/hdwallet-provider')
const Web3 = require('web3')
const compiledfactory=require('./build/CampaignFactory.json')
const provider = new HDWalletProvider(
    "opera typical pilot same cricket correct need praise word among asthma recall",
    "https://eth-sepolia.g.alchemy.com/v2/XEswdGg1Vw46wb7Ft4VvQbDQv1nboYis"
)
const web3 = new Web3(provider)

const deploy = async () => {
    const accounts = await web3.eth.getAccounts()

    console.log('attempting to deploy from account ', accounts[0])
    const result = await new web3.eth.Contract(JSON.parse(compiledfactory.interface))
        .deploy({ data: compiledfactory.bytecode, arguments: ['hi there'] })
        .send({ gas: '5000000', from: accounts[0] })
    console.log('Contract deployed to ', result.options.address)
}
deploy()