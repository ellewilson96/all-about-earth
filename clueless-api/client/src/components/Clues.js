import React, { Component } from 'react';
import '../styles/Clues.css'
import Answer from './Answer'
class Clues extends Component {


render() {
  const renderClues = this.props.clues.map((clue, id) =>
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
        </div>
        <Answer answer={clue.answer}/>
        <div>
        </div>
      </div>
    </li>
)
  return(
    <div>
    <div className="clues-title">
    ALL CLUES!
    </div>
    <div className="clues-card">
      {renderClues}
    </div>
    </div>
  )
}
}

export default Clues;
