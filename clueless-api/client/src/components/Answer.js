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

  onClickButton2 = (e) => {
    e.preventDefault();
    this.setState({
      text: '',
      visible: false
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
        <div className="hide-link">
        <button onClick={this.onClickButton2} >
        Hide
        </button>
        </div>
      </div>
    )
}
}

export default Answer;
