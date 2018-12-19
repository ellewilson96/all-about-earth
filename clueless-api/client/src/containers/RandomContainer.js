import React, { Component } from 'react';
import axios from 'axios';
import Random from '../components/Random'

class RandomContainer extends Component {
  constructor(props){
      super(props)
          this.state = {
              random: []
          }
      }

  componentDidMount() {
      axios.get('http://localhost:3001/api/v1/random.json')
          .then(response => this.setState({
                  random: response.data
              }))
      .catch(error => this.setState({
        error
      }))
    }

    render() {
        return (
          <div>
          <Random random={this.state.random}/>
          </div>
        )
    }
}

  export default RandomContainer;
