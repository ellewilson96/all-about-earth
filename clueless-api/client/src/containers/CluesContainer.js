import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import Clues from '../components/Clues'
import { addClues } from '../actions/index';


class CluesContainer extends Component {
    state = {
        clues: []
      }


  componentDidMount() {
    this.setState({
    clues: this.props.addClues(this.state)
  })
    }

    render() {
      if (this.props.clues.length === 0) {
        return (
         <div>There aren't any clues !</div>
       )
    }
      return (
        <div>
        <Clues clues={this.props.clues[0]} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return { clues: state.clues }
  }



export default connect(mapStateToProps, { addClues })(CluesContainer);
