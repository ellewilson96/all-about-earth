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
        <header className="App-header">
          <h1 className="App-title">Clueless Trivia</h1>
        </header>
        <div class="clues-container">
        <CluesContainer />
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
