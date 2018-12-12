import React, { Component } from 'react';
import './Clues.css'
import axios from 'axios';
import { connect } from 'react-redux'

class Clues extends Component {
  state = {
    clues: []
  }

  componentDidMount() {
    axios.get('./api/v1/clues.json')
      .then(response => {
        this.setState({
          clues: response.data
        })
    })
  }

render() {
  console.log(this.state.clues)
  const renderClues = this.state.clues.map((clue, id) =>

    <li
      key={clue.id}
      onClick={() => this.props.addClue(clue, this.state.clues)}
      className="single-clue"
      >
      <h4 className="category-title">{clue.category.title}</h4>
      <h2>${clue.value}</h2>
      <h4>{clue.question}.</h4>
      <h5>What is... {clue.answer}?</h5>
    </li>
)
  return(
    <div>
      {renderClues}
    </div>
  )
}
}
const mapStateToProps = state => {
  return {
    clues: state.clues
  }
}


export default connect(mapStateToProps)(Clues);
