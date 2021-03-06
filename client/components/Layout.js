import React, {Component} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import layoutStyles from '../styles/layoutStyles.js';
import AuthService from '../utils/AuthService.js';
import AdminDropdown from './AdminDropdown.js';
import {API_URL} from '../config';
const auth = new AuthService(API_URL); 

export default class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            isLoggedIn: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        console.log('layout props', this.props)
        return (
            <div className="app">
                <div className="body-nav">
                </div>
            <div id="layout">
                <Head>
                    <title>Art's BBC</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                    <link rel="stylesheet" media="all" type="text/css" href="/static/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/static/css/styles.css"/>  
                </Head>
                <Navbar className="navbar-dark" expand="md">
                  <NavbarBrand href="/">Art of Bail Hawaii</NavbarBrand>
                  <NavbarToggler right onClick={this.toggleNav} className="mr-2"/>
                  <Collapse isOpen={this.state.isOpen} padding-right="1rem" navbar>
                    <Nav id="nav-items" className="ml-auto navbar-dark" navbar>
                      <NavItem> 
                          <Link prefetch href="/"><a className="nav-link">Home</a></Link>
                      </NavItem>
                      <NavItem>
                              <Link prefetch href="/about-us"><a className="nav-link">About Us</a></Link>
                      </NavItem>
                      <NavItem>
                              <Link prefetch href="/find-your-case"><a className="nav-link">Find Your Case</a></Link>
                      </NavItem>
                      <NavItem>
                          <Link prefetch href="/contact-us"><a className="nav-link">Contact Us</a></Link>
                      </NavItem>
                      <NavItem className="admin-login-button"> 
                          {
                          auth.loggedIn()?(<AdminDropdown {...this.props}/>) : (<Link prefetch href="/admin-login"><a className="nav-link">Login</a></Link>)
                          }
                      </NavItem>
                    </Nav>
                  </Collapse>
              </Navbar>
                  {this.props.children}
                  <div className="footer-container">
                      <div className="footer-info">
                          <h5>Art of Bail Hawaii</h5>
                          <p>Created and maintained by Famouss Solutions Co.</p>
                      </div>
                </div>
                <style jsx global>{layoutStyles}</style>
            </div>
        </div>
        )
    }
}
