import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './About';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <p> My awesome Home component </p>
        <Route path="/about" component={About}/>
      </div>
    );
  }
}

export default Home;
