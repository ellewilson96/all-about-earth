import React, { Component } from 'react';
import '../styles/Answer.css'

class Answer extends Component {
  state = {
    text: 'Reveal Answer'
  }

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({
      text: this.props.clue.answer,
    })
  }

  render() {
    console.log(this.answer)
    return(
      <div>
        <div>
        <button onClick={this.onClickButton}>
        {this.state.text}
        </button>
        </div>
      </div>
    )
}
}

export default Answer;
