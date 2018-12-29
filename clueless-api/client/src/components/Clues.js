import React, { Component } from 'react';
import '../styles/Clues.css'


class Clues extends Component {
  //
  // handleEvent(e) {
  //   e.preventDefault();
  //   const answer = this.answer
  //   return(
  //       <div className="answer">
  //         <Answer answer={answer} />
  //       </div>
  //     )
  // }
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
          <div>
          <button onClick={this.handleEvent.bind(clue)}>REVEAL ANSWER</button>
          </div>
          <div id="answer">
          </div>
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
