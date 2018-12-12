import React, { Component } from 'react';
import './App.css';

import CluesContainer from './containers/CluesContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import Clues from './components/Clues';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <div className="app-title">Clueless Trivia</div>
          <div className="jservice">powered by <a href="http://jservice.io">jService</a></div>
        </div>
        <div class="clues-container">
        <Clues />
        </div>
      </div>
    );
  }
}

  const mapStateToProps = state => {
  return {
    question: state.question
 }}

export default connect(mapStateToProps)(App);
