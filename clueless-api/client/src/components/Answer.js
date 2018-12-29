import React, { Component } from 'react';
import '../styles/Answer.css'

class Answer extends Component {
  state = {
    text: '',
  }

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({
      text: this.props.clue.answer,
    })
  }

  render() {
    return(
      <div>
        <div>
        <button onClick={this.onClickButton}>
        What is... {this.state.text}?
        </button>
        </div>
      </div>
    )
}
}

export default Answer;
