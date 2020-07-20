import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './Toolbar.css';
import {HashLink as Link} from 'react-router-hash-link';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import {BrowserRouter} from "react-router-dom";
import Main from './Main';


class Toolbar extends Component {
    render () {
        // styles for navbar
        const style = {
            color: 'white',
            'text-decoration': 'None',
            padding:"10px"
        };
        const style1 = {
            color: 'white',
            margin: '8px',
            'text-decoration': 'None',
            ':hover': {
                color: '#2B2B52'
             }
        };
        const style3 = {
            // position: 'sticky',
            top: '0',
        }

        return (
        // nav bar resposive
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar-header" style={style3} >
                <BrowserRouter>
                    <Link >
                        <img
                            src="logo.jpg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        />
                    </Link>
                    <Link  smooth={true} duration={1000} style={style}>Resume To Pdf</Link>
                </BrowserRouter>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-link">
                    <Nav className="ml-auto my-link" >
                        <BrowserRouter>
                        {/* with scroll down using id */}
                            <Link to="#aboutus" smooth={true} duration={1000} style={style1}>About</Link>
                            <Link to="#contactus" smooth={true} duration={1000} style={style1}>Contact Us</Link>
                        </BrowserRouter>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <AboutUs/>
            <ContactUs/>
        </div>
        )
    }
}

export default Toolbar;