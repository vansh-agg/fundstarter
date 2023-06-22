import React from "react";
import { Menu,Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import {Link} from '../routes'
import Head from "next/head";
export default (props)=>{
    return(
        <div>
        <Head>
            <title>FUNDSTARTER</title>
        </Head>
        
            <Menu fixed stackable inverted borderless size="massive" style={{marginBottom:'60px'}}>
                <Link route='/'>
                    <a className="item">
                    FUNDSTARTER</a>
                </Link>
                <Menu.Menu position='right'>
                <Link route='/'>
                    <a className="item">Campaigns</a>
                </Link>
                <Link route='/campaigns/new'>
                    <a className="item">Add Campaign</a>
                </Link>
                </Menu.Menu>
            </Menu>
            <Container>
            {props.children}
            </Container>
        </div>
    )
}