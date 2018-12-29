import React, { Component } from 'react';
import '../styles/Answer.css'

class Answer extends Component {

  render() {
    console.log(this.answer)
    return(
        <div className="answer">
          {this.answer}
        </div>

    )
}
}

export default Answer;
