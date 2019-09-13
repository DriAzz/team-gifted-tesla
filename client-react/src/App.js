import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";


const App = props => {
  return (
    <div>
      <Header />
      <Backend />
    </div>
  );
}

class Backend extends Component {
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

  renderMotherboard = ({id, name, price}) => <div key={id}>{name} {price}</div>

  render() {
    const {motherboards} = this.state;
    return (
      <div className="App">
        {motherboards.map(this.renderMotherboard)}
      </div>
    )
  }
}

export default App;