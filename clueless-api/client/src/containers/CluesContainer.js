import React, { Component } from 'react';
import Clues from '../components/Clues'
import { connect } from 'react-redux'; /* code change */
import axios from 'axios';

class CluesContainer extends Component {
  constructor(props){
      super(props)
          this.state = {
              clues: this.props.clues
          }
          console.log(props)
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
          <div className="clues-card">
          {Clues}
          </div>
        )
    }
  }

  const mapStateToProps = (state) => {
    return { clues: state.clues };
    debugger
  };

  export default connect(mapStateToProps)(CluesContainer);
