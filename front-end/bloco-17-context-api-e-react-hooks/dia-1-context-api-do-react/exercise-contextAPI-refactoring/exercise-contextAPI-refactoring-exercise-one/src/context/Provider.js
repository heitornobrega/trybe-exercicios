
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
    };

    // Ao verificar o arquivo src/index.js abaixo, verá que este Provider é importado, e tem como 'children' o componente <App />.
    // Significa que aqui temos um provider genérico que passará contexto para qualquer filho que receba, no caso do src/index.js, este filho é o App.
    const { children } = this.props;

    return (
      <MyContext.Provider value={context}>
        {children}
      </MyContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;