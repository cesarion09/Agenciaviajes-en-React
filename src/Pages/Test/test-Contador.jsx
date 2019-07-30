import React from 'react';
import './test-Contador.css';

class Contador extends React.Component {
    state = {
        count: Number(this.props.init) || 0
    }
    increment = () => {
        this.setState({ count: this.state.count + (Number(this.props.step) || 1) });
    }
    decrement = () => {
        this.setState({ count: this.state.count - (Number(this.props.step) || 1) });
    }
    render() {
        return <div className="contador"><span onClick={() => { this.decrement() }}>-</span>{this.state.count}<span onClick={() => { this.increment() }}>+</span></div>
    }
}

export default Contador;