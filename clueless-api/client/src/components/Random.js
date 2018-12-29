import React, { Component } from 'react';
import Answer from '../components/Answer'
import '../styles/Clues.css'

  class Random extends Component {

handleEvent = (e) => {
  e.preventDefault();
      return(
      <div>
        <Answer />
      </div>
    )
}


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
              <div>
              <button onClick={this.handleEvent.bind(this)}>REVEAL ANSWER</button>
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
