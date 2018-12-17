import React, { Component } from 'react';
import '../styles/Category.css'

  class Category extends Component {

  render() {
    console.log(this.props)
    return(
  <div>
    <li
      key={this.props.id}
      >
      <div className="category-card">
      <h3>{this.props.title}</h3>
          <div className="category">
            <div className="category-sides">
              <div className="category-front">
              </div>
              <div className="category-back">
              </div>
              </div>
              </div>
        </div>
    </li>
  </div>
)
}
}

export default Category;
