import React, { Component } from 'react';
import '../styles/Clues.css'
import Answer from './Answer'


  class Random extends Component {

    reloadPage() {
          window.location.reload();
        }

    render() {
      const randomClue = this.props.random.map((clue, id) =>
        <li
          key={clue.id}
          >
          <div className="clue">
              <h3 className="clue-title">{clue.category.title}</h3>
                <h2 className="clue-value">${clue.value}</h2>
            <div className="clue-sides">
              <div className="clue-front">
                <h4>{clue.question}</h4>
              </div>
              <div>
              <Answer clue={clue}/>
              </div>
              <div className="random-button">
              <button type="button" onClick={() => this.reloadPage()}> <span>TRY ANOTHER</span> </button>
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
