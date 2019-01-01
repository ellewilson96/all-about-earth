import React, { Component } from 'react';
import '../styles/Answer.css'

class Answer extends Component {
  state = {
    text: '',
    visible: false
  }

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({
      text: this.props.clue.answer,
      visible: true
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
