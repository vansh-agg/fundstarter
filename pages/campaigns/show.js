import React from "react";
import Layout from "../../components/layout";
import Campaign from '../../ethereum/campaign'
import { Card,Grid,Button, Segment,Header } from "semantic-ui-react";
import web3 from "../../ethereum/web3";
import {Link} from "../../routes"
import Contributeform from "../../components/contributeform";

Campaignshow.getInitialProps=async(props)=>{
    const campaign=Campaign(props.query.address)
    const summary=await campaign.methods.getsummary().call()
    return {
        address:props.query.address,
        mininmumcontribution:summary[0],
        balance:summary[1],
        requestcount:summary[2],
        approvercount:summary[3],
        manager:summary[4],
        title:summary[5],
        details:summary[6]
    };
  }
export default function Campaignshow(props){
    const items=[
        {
            header:props.manager,
            meta:'Address of Manager',
            description:'Campaign created by the manager and can create requests to withdraw money',
            style:{overflowWrap:'break-word'}
        },
        {
            header:props.mininmumcontribution,
            meta:'Minimum Contribution(wei)',
            description:'You must contribute atleast this much wei to be a contributor'
        },
        {
            header:props.requestcount,
            meta:'Number of Requests',
            description:'A request tries to withdraw money from the contract. Requests must be approved by approvers'
        },
        {
            header:props.approvercount,
            meta:'Number of Approvers',
            description:'Number of people who have already contributed to the campaign'
        },
        {
            header:web3.utils.fromWei(props.balance,'ether'),
            meta:'Campaign balance(ether)',
            description:'Amount of money this campaign has left to spend'
        }
    ]
    return(
        <Layout>
            
            <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                <Card.Group items={items}/>
                
                </Grid.Column>
                <Grid.Column width={6}>
                <Header as='h2' attached='top' textAlign="center" block>
                {props.title}
                    </Header>
                    <Segment attached style={{marginBottom:'50px'}}>
                    {props.details}
                    </Segment>
                    {/* <Segment style={{marginBottom:'60px',marginTop:'30px'}} raised>{props.details}</Segment> */}
                    <Contributeform address={props.address} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Link route={`/campaigns/${props.address}/requests`}>
                    <a>
                        <Button primary style={{marginTop:'20px'}}>View Requests</Button>
                    </a>
                    </Link>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            
            
            
        </Layout>
    )
}