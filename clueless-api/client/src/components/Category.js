import React, { Component } from 'react';
import '../styles/Category.css'

class Category extends Component {

handleEvent(e) {
  e.preventDefault();
  console.log(this.props.category.clues)
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
              <button onClick={this.handleEvent.bind(this)}>CLICK TO PLAY</button>
              <div className="category-clues">
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
