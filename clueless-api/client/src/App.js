import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import CategoryContainer from './containers/CategoryContainer';
import CluesContainer from './containers/CluesContainer';
import Random from './components/Random';
import About from './components/About';

class App extends Component {
  render() {
    const App = () => (
      <div>
      <NavBar />
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/categories" component={CategoryContainer} />
      <Route path="/clues" component={CluesContainer} />
      <Route path="/random" component={Random} />
      </Switch>
      </BrowserRouter>
      </div>
    )
  return (
    <BrowserRouter>
      <Switch>
      <App />
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
