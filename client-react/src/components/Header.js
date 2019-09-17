import React from 'react';
import "./Header.css";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Contact from "../screens/Contact";
import { Button, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import USAsvg from '../assets/images/um.svg';
import Signup from '../screens/Signup';


const Header = props => {
    return (
        <div className="header-container">
            <Router>
                <div className="inner-header">
                    <h1 className="title">Mission Assistance</h1>

                    <div className="contact-container">
                        <Link className="loginLink" to="/users/login">Login</Link>
                        <Link className="contactLink" to="/contact">1-800-555-5555</Link>
                    </div>
                    <div className="router-container">
                        <Link className="homeLink" to="/">Home</Link>
                    </div>

                </div>

                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/users/login" component={Login} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/users/signup" component={Signup} />
                </div>
            </Router>
        </div >
    )
}

export default Header;