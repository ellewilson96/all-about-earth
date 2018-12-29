import React, { Component } from 'react';
// import axios from 'axios';
import '../styles/Points.css'

class Points extends Component {
  state = {
    points: 0
  }

  onChange = (e) => {
    e.preventDefault();
    const currentPoints = this.state.points
    this.setState({
      points: currentPoints + this.props.clue.value
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
    console.log(this.value)
    return (
      <div className="points">
        Your BANK:
        <div className="points-number">
          ${this.state.points}
        </div>
      </div>
    )
  }

}


export default Points;
