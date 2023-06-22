import React, { useState } from 'react'
import Layout from '../../../components/layout'
import { Form,Button,Message,Input, Grid,Dimmer,Loader,Header } from 'semantic-ui-react'
import web3 from '../../../ethereum/web3'
import Campaign from '../../../ethereum/campaign'
import {Router,Link} from '../../../routes'

Newrequest.getInitialProps=async(props)=>{
  const {address}=props.query;
  return {address};
}
export default function Newrequest(props){
  const[description,setdescription]=useState('')
  const[recipient,setrecipient]=useState('')
  const[val,setval]=useState('')
  const[active,setactive]=useState(false);
  const[errmsg,seterrmsg]=useState('');

  const handlesubmit=async(e)=>{
    e.preventDefault();
    console.log(props.address)
    const campaign=Campaign(props.address)
    setactive(true);
    seterrmsg('');
    try{
      const accounts=await web3.eth.getAccounts();
      await campaign.methods
      .createrequest(
        description,
        web3.utils.toWei(val,'ether'),
        recipient
      )
      .send({
        from:accounts[0]
      })
      Router.pushRoute(`/campaigns/${props.address}/requests`)
    }catch(err){
      seterrmsg(err.message);
    }
    setactive(false);
    setval('');
    setdescription('')
    setrecipient('')
  }
  return (
    <Layout>
    <Grid>
      <Grid.Column width={3}>
      <Link route={`/campaigns/${props.address}/requests`}>
        <a>
        
          <Button primary>Back</Button>
        </a>
      </Link>
      </Grid.Column>
      <Grid.Column width={10}>
    
    <h3>Add a New Request!</h3>
    <Form onSubmit={handlesubmit} error={!!errmsg}>
      <Form.Field>
        <label>Description</label>
        <Input
        value={description}
        onChange={(e)=>setdescription(e.target.value)}
         />
      </Form.Field>
      <Form.Field>
        <label>Value in ether</label>
        <Input 
          value={val}
          onChange={(e)=>setval(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Recipient</label>
        <Input 
          value={recipient}
          onChange={(e)=>setrecipient(e.target.value)}
        />
      </Form.Field>
      <Message error header="Oops!" content={errmsg}/>
      <Button primary>Create Request</Button>
      <Dimmer active={active} page>
            <Loader size="massive">
                <Header as='h2' inverted>
                    Creating Your Request...
                    <Header.Subheader>Please Wait!</Header.Subheader>
                </Header>
            </Loader>
            </Dimmer>
    </Form>
    </Grid.Column>
    </Grid>
    </Layout>
  )
}
