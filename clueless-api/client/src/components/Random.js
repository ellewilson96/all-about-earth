import React, { Component } from 'react';
import '../styles/Clues.css'

  class Random extends Component {

  render() {
  const randomClue = this.props.random.map((clue, id) =>
        <li
          key={clue.id}
          >
          <div className="clue">
          <h2 className="clue-title">{clue.category.title}</h2>
                <h2 className="clue-value">${clue.value}</h2>
            <div className="clue-sides">
              <div className="clue-front">
                <h4>{clue.question}</h4>
              </div>
              <div className="clue-back">
                <h5>What is... {clue.answer}?</h5>
              </div>
            </div>
          </div>
        </li>
    )
    return(
      <div>
      <div className="clues-title">
      RANDOM CLUE!
      </div>
      <div className="random-clues-card">
      {randomClue}
      </div>
      </div>
    )
  }
  }

export default Random;
