import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
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
    // this.props.addClues()
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

const mapStateToProps = (state) => {
    return { random: state.random}
  }

  const mapDispatchToProps = (dispatch) => {
      return { type: "ADD_RANDOM" }
    }


export default connect(mapStateToProps, mapDispatchToProps)(RandomContainer);
