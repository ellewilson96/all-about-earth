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
              {this.state.clues.map( clue => {
                  return (
                      <div className="single-clue" key={clue.id}>
                          <h4>{clue.question}.</h4>
                      </div>
                  )
              })}
          </div>
          )
      }
  }

  export default CluesContainer;
