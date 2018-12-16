import React, { Component } from 'react';
import './Category.css'

  class Category extends Component {
    constructor(props) {
      super(props);
      this.store = this.props.store;
    }

  render() {
    return(
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
  )
}
}

export default Category;
