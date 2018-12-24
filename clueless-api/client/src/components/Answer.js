import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import '../styles/Answer.css'

class Answer extends Component {
    state = {
      guess: ''
    };

  handleChange(event) {
  console.log(this.state.answer)
    this.setState({
      //call action
      answer: this.answer,
      guess: event.target.value
    });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.checkAnswer(this.state);
  this.setState({
    // render TRUE or FALSE -
    //if TRUE write +$clue value,
    //if false write 'TRY AGAIN'
    //after 3 clicks reveal answer
  })
}

render(){
  return(
    <div className="answer">
    <form onSubmit={ event => this.handleSubmit(event) }>
          <div>guess answer</div>
          What is... <input type="text" value={this.state.guess} onChange={(event) => this.handleChange(event)} />?
        <input type="submit" />
      </form>
    </div>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkAnswer: formData => dispatch({ type: "CHECK_ANSWER", payload: formData })
  }
}

export default connect(null, mapDispatchToProps)(Answer);
