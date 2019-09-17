import React, { Component } from 'react';
import "./Home.css"

const Home = () => (
    <div>
        <Grid />
    </div>
)

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

    renderMotherboard = ({ id, name, price }) =>    <div className="rowMotherboard">
                                                    <div className="gridRender" key={id}>Check out our <b>{name}</b>!
                                                    <div className="price" key={id}>${price}</div></div></div>

    render() {
        const { motherboards } = this.state;
        return (
            <div className="grid-container">
                <div className="grid3-3">
                    {motherboards.map(this.renderMotherboard)}
                </div>
            </div>
        )
    }
}

export default Home;