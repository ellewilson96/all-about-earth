import React, { Component } from 'react';
import '../styles/Category.css'

class Category extends Component {

  render() {
    console.log(this.props.category)
    const renderCategory = this.props.category

    return(
    <div>
      <div className="category-title">
      PLAY BY CATEGORY!
      </div>
      <div className="category-card">
    <li
      key={this.props.category.id}
      >
        <div className="category">
          <h2>{this.props.category.title}</h2>
            <div className="category-sides">
            <h3>{this.props.category.clues_count} CLUES</h3>
            <button onClick={this.byCategory}>CLICK TO PLAY</button>
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
