import React from 'react';
import "./Header.css";
import { Button, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import USAsvg from '../assets/images/um.svg';


const Header = props => {
    return (
        <div className="header-container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Mission Assistance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="button-header signupHeader" href="/signup">Signup</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="button-header loginHeader" href="/login">Login</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="button-header headerNumber" href="/support"><img src={USAsvg} className="USAimage" /> +1 (555)555-5555</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <ButtonToolbar className="buttonHover buttonHover01">
                    <NavDropdown title="Products" className="dropdownProduct" id="product-nav-dropdown">
                        <NavDropdown.Item href="#processors" className="dropdowns cpudrop">Processors</NavDropdown.Item>
                        <NavDropdown.Item href="#videocard" className="dropdowns gpudrop">Video Cards</NavDropdown.Item>
                        <NavDropdown.Item href="http://localhost:5000/motherboards/motherboard_list" className="dropdowns motherdrop">Motherboards</NavDropdown.Item>
                        <NavDropdown.Item href="#storage" className="dropdowns storagedrop">Storage</NavDropdown.Item>
                    </NavDropdown>
                </ButtonToolbar>
                <Form className="formSearch">
                    <Form.Group className="groupSearch">
                        <Nav>
                            <Form.Control className="searchForm" type="search" placeholder="Looking for something?"></Form.Control>
                            <Button varient="primary" type="submit" className="searchButton">Search</Button>
                        </Nav>
                    </Form.Group>
                </Form>
            </Navbar>
        </div>
    )
}

export default Header;