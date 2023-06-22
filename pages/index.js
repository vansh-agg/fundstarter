import React,{useEffect} from 'react'
import factory from '../ethereum/factory'
import { Card,Button, Grid } from 'semantic-ui-react'
import Layout from '../components/layout'
import {Link} from '../routes'

//represents the root route

Campaignindex.getInitialProps=async()=>{
  const campaigncount=await factory.methods.numofdeployedcampaigns().call();
  const campaigns=await Promise.all(
    Array(parseInt(campaigncount))
        .fill()
        .map((element,index)=>{
            return factory.methods.deployedcampaigns(index).call();
        })
  )
  
  return {campaigns};
}

export default function Campaignindex({campaigns}){

  return (
    <Layout>
    <div>
    <Grid>
    <Grid.Column width={8}>
      <h3>All Campaigns</h3>
    </Grid.Column>
    <Grid.Column width={8}>
      <Link route='/campaigns/new'>
        <a>
        <Button floated='right' content='Create Campaign' icon='add circle' primary />
        </a>
      </Link>
    </Grid.Column>
    </Grid>
    {campaigns.map((element,index)=>{
      return(
        {key:index},
        <Card style={{overflowWrap:'break-word'}} fluid={true}>
          <Card.Content header={element.title.toUpperCase()} />
          <Card.Content description={element.details} />
          <Card.Content>
              <Link route={`/campaigns/${element.campaignaddress}`}>
                <a>
                <Button size='small' primary>
                  View Campaign
                </Button>
                </a>
              </Link> 
          </Card.Content>
        </Card>
      )
    })}
    
    </div>
    </Layout>

  )
}
