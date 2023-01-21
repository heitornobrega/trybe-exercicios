import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import { Router } from 'react-router-dom';
import Users from './components/Users';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          </ul>
        </nav>
        
        <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route
          exact
          path="/users:id"
          render={(props) => <Users {...props} greetingsMessage="goodMorning" />} />
      </BrowserRouter>

        </Switch>

    );
  }
}

export default App;