import React, { Component } from 'react';
import './Clues.css'

class Clues extends Component {
  state = {
    clues: []
  }

render() {
  const renderClues = this.state.clues.map((clue, id) =>
    <li
      key={clue.id}
      >
      
      <div className="clues-card">
      <div className="clue">
          <h3 className="category-title">{clue.category.title}</h3>
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
      </div>
    </li>
)
  return(
    <div>
      {renderClues}
    </div>
  )
}
}


export default Clues;
