import React, { Component } from 'react';
import '../styles/Category.css'

class Category extends Component {

handleEvent = () => {
  this.setState({
      category: this.props.category
    })
}

  render() {
    const category = this.props.category
    return(
    <div>
      <div className="category-title">
      PLAY BY CATEGORY!
      </div>
      <div className="category-card">
    <li
      key={category.id}
      >
        <div className="category">
          <h2>{category.title}</h2>
            <div className="category-sides">
            <h3>{category.clues_count} CLUES</h3>
              <h4>CLICK TO PLAY</h4>
              <div className="differentClue">
               <button onClick={this.handleEvent}>DIFFERENT CLUE</button>
               </div>
            </div>
        </div>
    </li>
  </div>
  </div>
  )
}
}

export default Category;
