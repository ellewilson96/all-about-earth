import React, { Component } from 'react';
import Clues from '../components/Clues'


class Home extends Component {
  render() {
    return (
    <div className="App">
    <div className="clues-card">
    <Clues />
    </div>
    </div>
    );
  }
}
export default Home;
