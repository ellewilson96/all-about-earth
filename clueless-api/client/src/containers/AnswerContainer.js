import React, { Component } from 'react'
import Answer from '../components/Answer';
import {connect} from 'react-redux'

class AnswerContainer extends Component {
  render() {
    return(
      <div>
     <Answer guess={this.props.guess} />
      </div>
    )
  }
}

const mapStateToProps = ({guess}) => ({guess})


 export default connect(mapStateToProps)(AnswerContainer)
