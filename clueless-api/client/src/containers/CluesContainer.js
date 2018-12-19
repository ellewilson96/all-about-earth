import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
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
    }

render() {
  return (
    <div>
    <Clues clues={this.state.clues} />
    </div>
  )
}
}

const mapStateToProps = (state) => {
    return { clues: state.clues}
  }

  export default connect(mapStateToProps)(CluesContainer);
