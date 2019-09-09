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
    this.getProducts();
  }

  getProducts = _ => {
    fetch('http://localhost:5000/products')
    .then(response => response.json())
    .then(response => this.setState({ motherboards: response.data }))
    .catch(err => console.error(err))
  }

  renderMotherboard = ({motherboardID, motherboardName}) => <div key={motherboardID}>{motherboardName}</div>

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