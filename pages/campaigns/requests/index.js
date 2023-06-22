import React from "react";
import Layout from "../../../components/layout";
import {Link} from '../../../routes'
import { Button,Table,Grid, GridColumn } from "semantic-ui-react";
import web3 from "../../../ethereum/web3";
import Campaign from '../../../ethereum/campaign'
import Requestrow from "../../../components/requestrow";

Requestindex.getInitialProps=async(props)=>{
    const {address}=props.query;
    const campaign=Campaign(address);
    const requestcount=await campaign.methods.getrequestcount().call()
    const approverscount=await campaign.methods.approvercount().call();
    const requests=await Promise.all(
        Array(parseInt(requestcount))
            .fill()
            .map((element,index)=>{
                return campaign.methods.requests(index).call();
            })
    )
    return {address,requests,requestcount,approverscount};
}
export default function Requestindex(props){
    const {Header,Row,HeaderCell,Body}=Table;
  
    return(
        <Layout>
        <Grid>
        <Grid.Column width={7}>
        <Link route={`/campaigns/${props.address}`}>
                <a>
                    <Button primary style={{marginBottom:'50px'}}>Back</Button>
                </a>
            </Link>
        </Grid.Column>
        <Grid.Column width={4}>
            <h3>Requests Index</h3>
        </Grid.Column>
        <Grid.Column width={5}>
            <Link route={`/campaigns/${props.address}/requests/new`}>
                <a>
                    <Button primary floated="right" style={{marginBottom:'50px'}}>Add request</Button>
                </a>
            </Link>
        </Grid.Column>
        </Grid>
        <Table>
            <Header>
                <Row>
                    <HeaderCell>ID</HeaderCell>
                    <HeaderCell>Description</HeaderCell>
                    <HeaderCell>Amount</HeaderCell>
                    <HeaderCell>Recipient</HeaderCell>
                    <HeaderCell>Approval Count</HeaderCell>
                    <HeaderCell>Approve</HeaderCell>
                    <HeaderCell>Finalize</HeaderCell>
                </Row>

            </Header>
            <Body>
                {props.requests.map((element,index)=>{
            return <Requestrow 
                key={index}
                id={index}
                request={element}
                address={props.address}
                approvers={props.approverscount}

            />
        })}
            </Body>
        </Table>
        <div style={{marginTop:'30px',fontSize:'16px'}}>Found {props.requestcount} requests </div>
        </Layout>
    )
}