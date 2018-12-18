import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import Home from './containers/Home';
import Category from './components/Category';
import CluesContainer from './containers/CluesContainer';
import Random from './components/Random';
import About from './components/About';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    const App = () => (
      <div>
      <NavBar />
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/category" component={Category} />
      <Route path="/clues" component={CluesContainer} />
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
