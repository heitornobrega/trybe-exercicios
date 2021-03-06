import React, { Component } from 'react';
import PropTypes from 'prop-types';
import carContext from './CarContext';

class Provider extends Component {
    state = {
        cars: {
            red: false,
            blue: false,
            yellow: false,
        },
        signal: {
            color: 'red',
        }
    }

    moveCar = (car, side) => {
        this.setState({
            cars: {
                ...this.state.cars,
                [car]: side,
            }
        });
    }

    changeSignal = (signalColor) => {
        this.setState({
            signal: {
                ...this.state.signal,
                color: signalColor,
            }
        })
    }

    render() {
        const context = {
            ...this.state,
            moveCar: this.moveCar,
            changeSignal: this.changeSignal
        }
        const { children } = this.props;
        return (
            <carContext.Provider value={context}>
                {children}
            </carContext.Provider>
        )
    }

}
Provider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default Provider;