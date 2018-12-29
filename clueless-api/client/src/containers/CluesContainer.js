import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import Clues from '../components/Clues'
import { addClues } from '../actions/index';



class CluesContainer extends Component {
  constructor(props){
        super(props)
            this.state = {
                clues: [],
            }
        }


  componentDidMount() {
    this.props.addClues(this.state)
    this.setState({
    clues: [],
  })
    }

    render() {
      console.log(this.props.clues)
      const clues = this.props.clues;
      return (
        <div>
        <Clues clues={clues}/>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
    return { clues: state.clues}
  }


export default connect(mapStateToProps, { addClues })(CluesContainer);
