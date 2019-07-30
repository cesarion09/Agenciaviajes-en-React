import React from 'react';

/* 
<Stepper text='adults' max={10} min={0} init={1} />
<Stepper text='adults' min="4" init="2" />
<Stepper text='niños' max={30} min={0} init={0} />
<Stepper text='niños' max={0} min={10} init={2} /> // Error
<Stepper text='coches' max={2} min={0} init={10} />
*/

class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.init || 0,
            min: this.props.min,
            max: this.props.max
        };
        // Checking
        this.state.value = Number(this.state.value).isNaN ? 0 : Number(this.state.value);
        if (typeof this.state.min !== 'undefined') this.state.min = Number(this.state.min).isNaN ? undefined : Number(this.state.min);
        if (typeof this.state.max !== 'undefined') this.state.max = Number(this.state.max).isNaN ? undefined : Number(this.state.max);
        if (this.state.max !== undefined && this.state.value > this.state.max) this.state.value = this.state.max;
        if (this.state.min !== undefined && this.state.value < this.state.min) this.state.value = this.state.min;
        if (this.state.min !== undefined && this.state.max !== undefined && this.state.min > this.state.max) console.log('ERROR: Valores no válidos');
    }
    incrementar = () => {
        if (this.state.max === undefined || this.state.max > this.state.value)
            this.setState({ value: this.state.value + 1 });
    }
    decrementar = () => {
        if (this.state.min === undefined || this.state.min < this.state.value)
            this.setState({ value: this.state.value - 1 });
    }
    render() {
        let mostrarMenos = false;
        let mostrarMas = false;
        let mostrarTxt = this.props.text;
        if (mostrarTxt) {
            if (this.state.value === 1 && mostrarTxt[mostrarTxt.length - 1] === 's') mostrarTxt = mostrarTxt.slice(0, -1);
        } else {
            mostrarTxt = '';
        }
        if (this.state.min !== undefined && this.state.value <= this.state.min) mostrarMenos = true;
        if (this.state.max !== undefined && this.state.value >= this.state.max) mostrarMas = true;

        return (
            <div className="stepper">
                <button disabled={mostrarMenos} onClick={this.decrementar}>-</button>
                <input disabled value={this.state.value + ' ' + mostrarTxt} />
                <button disabled={mostrarMas} onClick={this.incrementar}>+</button>
            </div>
        )

    }
}

export default Stepper;