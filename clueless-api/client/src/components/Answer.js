import React, { Component } from 'react';
import Clues from './Clues'
import '../styles/Answer.css'

class Answer extends Component {
  constructor(props) {
  super(props);
    state = {
      answer: this.props.answer
    };
}

  render() {
    return(
      <div>
        <button onClick={}>Click Me</button>
        {this.state.answer}
      </div>
    )
}
}

export default Answer;
