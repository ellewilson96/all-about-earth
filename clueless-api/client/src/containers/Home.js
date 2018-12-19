import React, { Component } from 'react';
import '../styles/About.css'
import showhost from '../showhost.png'

  class Home extends Component {

  render() {
    return(
      <div>
      <div className="about-title">
      ABOUT CLUELESS!
      </div>
      <div className="about">
      <h3>TEST YOUR KNOWLEDGE WITH CLUELESS TRIVIA!</h3>
      <h4>PLAY BY CATEGORY, PICK A RANDOM CLUE, OR DIVE DEEP INTO THOUSANDS OF CLUES FROM THE J.ARCHIVE!</h4>
      <img src={showhost} className="showhost" alt="iconic" />
      </div>
      </div>
      )
    }
}

export default Home;
