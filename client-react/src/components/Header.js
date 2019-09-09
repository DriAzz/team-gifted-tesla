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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="#support"><img src={USAsvg} className="USAimage" /> +1 (555)555-5555</Nav.Link>
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Nav.Link href="#signup">Signup</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
            <Navbar bg="light" expand="lg">
                <ButtonToolbar className="buttonHover buttonHover01">
                    <NavDropdown title="Products" id="product-nav-dropdown">
                        <NavDropdown.Item href="#processors" className="dropdowns cpudrop">Processors</NavDropdown.Item>
                        <NavDropdown.Item href="#videocard" className="dropdowns gpudrop">Video Cards</NavDropdown.Item>
                        <NavDropdown.Item href="#motherboard" className="dropdowns motherdrop">Motherboards</NavDropdown.Item>
                        <NavDropdown.Item href="#storage" className="dropdowns storagedrop">Storage</NavDropdown.Item>
                    </NavDropdown>
                </ButtonToolbar>
                <Form className="formSearch">
                    <Form.Group className="groupSearch">
                        <Form.Control className="searchForm" type="search" placeholder="Looking for something?"></Form.Control>
                    </Form.Group>
                </Form>
            </Navbar>
        </div >
    )
}

export default Header;