import React, { Component } from 'react';
import '../styles/Clues.css'

  class Random extends Component {
    constructor(props) {
      super(props);
      this.store = this.props.store;
    }

  render() {
    return(
    <li
      key={this.props.id}
      >
      <div className="clue-card">
      <h3>{this.props.title}</h3>
          <div className="clue">
            <div className="clue-sides">
              <div className="clue-front">
              </div>
              <div className="clue-back">
              </div>
              </div>
              </div>
        </div>
    </li>
  )
}
}

export default Random;
