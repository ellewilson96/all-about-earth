import React, { Component } from 'react';
import Category from '../components/Category'
import Clues from '../components/Clues'



class Home extends Component {
  render() {
    return (

    <div className="App">
    <div className="category-card">
    <Category />
    </div>
    <div className="clues-card">
    <Clues />
    </div>
    </div>
    );
}
}
export default Home;
