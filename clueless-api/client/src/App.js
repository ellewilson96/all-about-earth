import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './containers/Home';
import Category from './components/Category';
import Clues from './components/Clues';
import Random from './components/Random';

class App extends Component {
  render() {
    const App = () => (
      <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/clues" component={Clues} />
      <Route path="/random" component={Random} />
      </Switch>
      </BrowserRouter>
      </div>
    )
  return (
    <BrowserRouter>
      <Switch>
      <App/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
