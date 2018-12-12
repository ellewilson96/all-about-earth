import React, { Component } from 'react';
import axios from 'axios';

class CluesContainer extends Component {
      constructor(props){
          super(props)
          this.state = {
              clues: []
          }
      }
      componentDidMount() {
          axios.get('http://localhost:3001/api/v1/clues.json')
          .then(response => {
              console.log(response)
              this.setState({
                  clues: response.data
              })
          })
          .catch(error => console.log(error))
      }
      render() {
          return (
            <div className="clues-container">
              </div>
          )
      }
  }

  export default CluesContainer;
