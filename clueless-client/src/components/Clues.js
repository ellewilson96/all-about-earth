import React from 'react';

class Clues extends React.Component {
  render() {
    return (
      <div>
      {this.state.clues.map(clue => clue.question[1])}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(response => response.json())
      .then(data => {
        this.setState({
          clueList: data.clues
        })
      })
  }
}
