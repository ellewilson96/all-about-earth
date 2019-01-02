import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import Clues from '../components/Clues'
import { addClues } from '../actions/index';


class CluesContainer extends Component {

  componentDidMount() {
    this.props.addClues()
  }

    render() {
      if (this.props.clues.length === 0) {
        return (
         <div className="clues-title">loading...</div>
       )
    }
      return (
        <div>
        <Clues clues={this.props.clues} />
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return { clues: state.clues }
  }



export default connect(mapStateToProps, { addClues })(CluesContainer);
