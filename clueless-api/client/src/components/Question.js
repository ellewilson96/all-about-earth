import React from 'react';

class Question extends React.Component {
  render() {
    return (
      <div>
      {this.state.clues.map(clue => clue.question[1])}
      </div>
    )
}
}

export default Question
