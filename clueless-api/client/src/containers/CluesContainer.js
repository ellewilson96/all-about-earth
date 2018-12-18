import React, { Component } from 'react';
import axios from 'axios';
import Clues from '../components/Clues'

class CluesContainer extends Component {
  constructor(props){
      super(props)
          this.state = {
              clues: []
          }
      }

  componentDidMount() {
      axios.get('http://localhost:3001/api/v1/clues.json')
          .then(response => this.setState({
                  clues: response.data
              }))
      .catch(error => this.setState({
        error
      }))
      console.log(this.state)
    }

    render() {
        return (
          <div>
          <Clues clues={this.state.clues}/>
          </div>
        )
    }
}

  export default CluesContainer;
