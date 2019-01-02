import React, { Component } from 'react';
import '../styles/Home.css'
import { Link } from 'react-router-dom'

  class Home extends Component {


  render() {
    return(
      <div id="root">
      <div className="home-container">
      <div className="home-title">
      <h2>WELCOME TO</h2>
      <h1>CLUELESS TRIVIA</h1>
      </div>
      <div className="game-button">
        <button>
        <Link to="/clues">GET YOUR GAME ON</Link>
        </button>
      </div>
      </div>
      </div>
      )
    }
}

export default Home;
