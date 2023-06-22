import React, { useState } from 'react'
import { Table,Button } from 'semantic-ui-react'
import web3 from '../ethereum/web3'
import Campaign from '../ethereum/campaign'
import {Router} from '../routes'

export default function Requestrow(props){
    const[loading1,setloading1]=useState(false);
    const[loading2,setloading2]=useState(false);
    const {Row,Cell}=Table
    const readytofinalize=props.request.approvalcount>props.approvers/2;
    const handleapprove=async()=>{
        setloading1(true);
        const accounts=await web3.eth.getAccounts();
        const campaign=Campaign(props.address)
        try{
            await campaign.methods.approverequest(props.id).send({
                from:accounts[0]
            })
        }catch(err){
            setloading1(false)
        }
            setloading1(false)
            Router.replaceRoute(`/campaigns/${props.address}/requests`)
    }
    const handlefinalize=async()=>{
        setloading2(true);
        const accounts=await web3.eth.getAccounts();
        
        const campaign=Campaign(props.address);
        try{
        await campaign.methods.finalizerequest(props.id).send({
            from:accounts[0]
        })
        }catch(err){
            setloading2(false);
        }
        setloading2(false);
        Router.replaceRoute(`/campaigns/${props.address}/requests`)

    }
  return (
    <Row disabled={props.request.complete} positive={readytofinalize && !props.request.complete}>
        <Cell>{props.id}</Cell>
        <Cell>{props.request.description}</Cell>
        <Cell>{web3.utils.fromWei(props.request.value,'ether')}</Cell>
        <Cell>{props.request.recipient}</Cell>
        <Cell>{props.request.approvalcount}/{props.approvers}</Cell>
        <Cell>
        {props.request.complete?'FINALIZED':(
            <Button color="green" basic onClick={handleapprove} loading={loading1}>
                Approve
            </Button>)
        }
        </Cell>
        <Cell>
        {props.request.complete?'FINALIZED':(
            <Button color="teal" basic onClick={handlefinalize} loading={loading2}>Finalize</Button>
            )
        }
        </Cell>
    </Row>
  )
}
