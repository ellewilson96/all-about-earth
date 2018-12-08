import React, { Component } from 'react';
import './App.css';

import CluesContainer from './containers/CluesContainer';
import Clues from './components/Clues';

import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div>
      {this.props.clues}
      </div>
    )
  }
}

  const mapStateToProps = state => {
  return {
    question: state.question
 }}

export default connect(mapStateToProps)(App);
