import React, { Component } from 'react';
import './App.css';


import CluesContainer from './containers/CluesContainer';
import CategoriesContainer from './containers/CategoriesContainer';
import Clues from './components/Clues';
import NavBar from './components/NavBar';

import { connect } from 'react-redux';
import { banner } from './banner.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="jservice">powered by <a href="http://jservice.io">jService</a></div>
        <NavBar />
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
