// src/TrafficSignal.jsx

import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import React, { Component } from 'react';
import carContext from './context/CarContext';

class TrafficSignal extends Component {
  renderSignal = (signalColor) => {
    if (signalColor === 'red') return redSignal;
    if (signalColor === 'yellow') return yellowSignal;
    if (signalColor === 'green') return greenSignal;
    return null;
  };

  render() {
    console.log(this)
    const { changeSignal } = this.context;
    return (
      <div>
        <div className="button-container">
          <button onClick={() => changeSignal('red')} type="button">
            Red
          </button>
          <button onClick={() => changeSignal('yellow')} type="button">
            Yellow
          </button>
          <button onClick={() => changeSignal('green')} type="button">
            Green
          </button>
        </div>
        <img className="signal" src={this.renderSignal(this.context.signal.color)} alt="" />
      </div>
    );
  }
}

TrafficSignal.contextType = carContext;

export default TrafficSignal;
