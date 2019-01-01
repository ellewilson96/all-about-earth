import React, { Component } from 'react';
import snl from '../snl.jpg'
import '../styles/About.css'

  class About extends Component {

  render() {
    return(
      <div>
      <div className="about-title">
      ABOUT CLUELESS!
      </div>
      <div className="about">
      <h3>TEST YOUR KNOWLEDGE WITH CLUELESS TRIVIA!</h3>
      <h4>BUILT BY A MASSIVE FAN OF JEOPARDY. THIS WEB APPLICATION IS POWERED BY THE JSERVICE API, WHICH USES DATA
      FROM THE OFFICIAL JEOPARDY ARCHIVE (JARCHIVE). BUILT WITH RUBY ON RAILS, JAVASCRIPT, REACT, AND REDUX.</h4>
      <div class="snl-image">
      <img src={snl} className="snl" alt="snl" />
      </div>
      </div>
      </div>
      )
    }
}

export default About;
