import React, { Component } from 'react';

class Answer extends Component {
  state = {
    answer: []
  }

  componentDidMount() {
    const i = this.state
    fetch('./api/v1/clue/'+i)
      .then(response => {
        console.log(response)
        this.setState({
          answer: response.data
        })
    })
  }

render() {
  return (
    <div>
    {this.state.clue}
    </div>
  )
}
}

export default Answer;
