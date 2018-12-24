import React, { Component } from 'react';
// import axios from 'axios';
import '../styles/Points.css'

class Points extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0
    }
  }

increasePoints(e) {
  e.preventDefault();
  const currentPoints = this.state.points
  this.setState({
    points: currentPoints + 100
  })
}

// callApi = () => {
//   console.log('a')
//   axios.get('http://localhost:3001/api/v1/clues.json')
//       .then(function(response){
//         console.log('b')
//         return response.json()
//       })
//       .then(clues => {
//         console.log('c', clues)
//       })
//       console.log('d')
//
//       //  b c + clues d
//   }


  render() {
    return (
      <div className="points">
        <div className="points-counter">
          <button onClick={this.increasePoints.bind(this)}>ADD MONEY </button>
        </div>
        Your BANK:
        <div className="points-number">
          ${this.state.points}
        </div>
      </div>
    )
  }
}


export default Points;
