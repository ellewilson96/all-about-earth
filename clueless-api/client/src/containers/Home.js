import React, { Component } from 'react';
import NavBar from '../components/NavBar'
import Clues from '../components/Clues'


class Home extends Component {
  render() {
    return (
    <div className="App">
    <NavBar />
        <button variant="raised" onClick={Clues}>
            All Clues
        </button>
    </div>
    );
  }
}
export default Home;
