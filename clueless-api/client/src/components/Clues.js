import React, { Component } from 'react';

class Clues extends Component {
  state = {
    clues: []
  }

  componentDidMount() {
    fetch('./api/clues')
      .then(response => {
        console.log(response)
        this.setState({
          clues: response.data
        })
    })
  }

render() {
  console.log(this.state.clues)
  return (
    <div>
    {this.state.clues}
    </div>
  )
}
}

export default Clues;
