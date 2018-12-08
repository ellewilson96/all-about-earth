import React, { Component } from 'react';
import './App.css';

import LoginForm from '../components/LoginForm';
import Clues from '../components/Clues';
import Login from '../components/Login';
import Question from '../components/Question';
import SignUp from '../components/SignUp';

import { connect } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";

const APIURL = `http://jservice.io/api/clues`

class App extends Component {

  state = {
    clues: []
  }

  render() {
    return (
      <div>
      {this.state.map.clues}
      </div>
    )
  }

  handleClick = event => {
  fetch(APIURL)
    .then(res => res.json())
    .then(json => this.setState({data: json}))
}

  render() {
  return (
    <button onClick={this.handleClick}>Click to Play!</button>
  )
  }
}

  const defaultLimit = 100

  const TextField = (props) =>
  <input
    className="field field-light"
    onChange={props.onChange}
    limit={props.limit || defaultLimit}
  />;

export default App
