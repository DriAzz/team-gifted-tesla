import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import { Button, Carousel, Row, Col, Container, Navbar, Nav, NavDropdown, Form, FormControl, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';


const App = props => {
  return (
    <div>
      <Header />
      <Grid />
    </div>
  );
}

class Grid extends Component {
  state = {
    motherboards: []
  }
  componentDidMount() {
    this.getMotherboards();
  }

  getMotherboards = _ => {
    fetch('http://localhost:5000/motherboards/motherboard_list')
      .then(response => response.json())
      .then(response => this.setState({ motherboards: response.data }))
      .catch(err => console.error(err))
  }

  renderMotherboard = ({ id, name, price }) => <Col xs={5} className="col" key={id}>Check out our {name}!
  <div className="price" key={id}>${price}</div></Col>

  render() {
    const { motherboards } = this.state;
    return (
      <div className="grid-container">
        <Container className="container">
          <Row className="row">
            {motherboards.map(this.renderMotherboard)}
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;