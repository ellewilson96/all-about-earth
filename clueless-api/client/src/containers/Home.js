import React, { Component } from 'react';
import '../styles/Home.css'
import showhost from '../showhost.png'

  class Home extends Component {

  render() {
    return(
      <div>
      <div className="home-title">
      <h2>WELCOME TO</h2>
      <h1>CLUELESS TRIVIA</h1>
      <img src={showhost} className="showhost" alt="iconic" />
      </div>
      </div>
      )
    }
}

export default Home;
