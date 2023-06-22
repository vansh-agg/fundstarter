import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Form ,Button,Input,Message, TextArea,Dimmer,Header,Loader} from 'semantic-ui-react'
import factory from '../../ethereum/factory'
import web3 from '../../ethereum/web3'
import { Router } from '../../routes'

export default function Campaignnew() {
    const[contribution,setcontribution]=useState('');
    const[title,settitle]=useState('');
    const[details,setdetails]=useState('');
    const[errormsg,seterrormsg]=useState('');
    const[active,setactive]=useState(false);
    const handlesubmit= async (e)=>{
        e.preventDefault();
        setactive(true);
        seterrormsg('');
        try{
            
            const accounts=await web3.eth.getAccounts();
            await factory.methods.createcampaign(contribution,title,details)
            .send({
                from:accounts[0]
            })
        Router.pushRoute('/');
        }catch(err){
            seterrormsg(err.message);
        }
        setactive(false);
    }
  return (
    <Layout>
    <h3>Create Your New Campaign!</h3>
    <Form onSubmit={handlesubmit} error={errormsg}>
        <Form.Field>
            <label>Title</label>
            <Input
                value={title}
                onChange={event=>settitle(event.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Details</label>
            <TextArea
                value={details}
                onChange={event=>setdetails(event.target.value)}
            />
        </Form.Field>
        <Form.Field>
            <label>Minimum Contribution</label>
            <Input label="wei" labelPosition="right"
                value={contribution}
                onChange={event=>setcontribution(event.target.value)}
            />
        </Form.Field>
        <Button primary>Create</Button>
            <Dimmer active={active} page>
            <Loader size="massive">
                <Header as='h2' inverted>
                    Waiting for Transaction...
                    <Header.Subheader>Please Wait!</Header.Subheader>
                </Header>
            </Loader>
            </Dimmer>
        <Message error>
        <Message.Header>Oops!</Message.Header>
        <p>{errormsg}</p>
        </Message>
        
    </Form>
    </Layout>
  )
}
