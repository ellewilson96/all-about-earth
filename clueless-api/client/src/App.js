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
        <NavBar />

        <div className="clues-card">
        <Clues />
        </div>
      </div>
    );
  }
}

  const mapStateToProps = state => {
  return {
    question: state.question,
    answer: state.answer
 }}

export default connect(mapStateToProps)(App);
