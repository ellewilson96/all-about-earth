import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <h1> It's Working! </h1>
    );
  }
}


export default connect(mapStateToProps)(App);
