import React, { Component } from 'react';
import Clues from '../components/Clues'
import { connect } from 'react-redux'; /* code change */
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
              console.log(response.data)
              this.setState({
                  clues: response.data
              })
          })
      .catch(error => console.log(error))
    }
    render() {
        return (
          <Clues clues={clues}/>
        )
    }
  }

  const mapStateToProps = (state) => {
    return { clues: state.clues };
  };

  export default connect(mapStateToProps)(CluesContainer);
