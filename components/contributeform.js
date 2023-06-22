import React, { useState } from "react";
import { Form,Input,Message,Button,Dimmer,Header,Loader } from "semantic-ui-react";
import Campaign from '../ethereum/campaign'
import web3 from "../ethereum/web3";
import {Router} from "../routes";

export default function Contributeform(props){
    const[val,setval]=useState('');
    const[errmsg,seterrmsg]=useState('');
    const[active,setactive]=useState(false);
    const handlesubmit= async (e)=>{
        e.preventDefault();
        const campaign=Campaign(props.address);
        setactive(true);
        seterrmsg('');
        try{
            const accounts=await web3.eth.getAccounts();
            
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(val,'ether')
            })
            Router.replaceRoute(`/campaigns/${props.address}`)
        }
        catch(err){
            seterrmsg(err.message)
        }
        setactive(false);
        setval('');

    }
    return(
        <Form onSubmit={handlesubmit} error={!!errmsg}>
            <Form.Field>
                <label>Amount To Contribute : </label>
                <Input 
                value={val}
                onChange={(e)=>{
                    setval(e.target.value)
                }}
                label="ether"
                labelPosition="right"
                 />
            </Form.Field>
            <Message error header="Oops!" content={errmsg}></Message>
            <Button primary>
                Contribute!
            </Button>
            <Dimmer active={active} page>
            <Loader size="massive">
                <Header as='h2' inverted>
                    Waiting for Transaction...
                    <Header.Subheader>Please Wait!</Header.Subheader>
                </Header>
            </Loader>
            </Dimmer>
        </Form>
    )
}