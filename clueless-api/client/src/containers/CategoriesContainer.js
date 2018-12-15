import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

class CategoriesContainer extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
    axios.get('./api/v1/categories.json')
      .then(response => {
        this.setState({
          categories: response.data
        })
    })
  }


render() {
  console.log(this.state.categories)
  const renderCategories = this.state.categories.map((category, id) =>
    <li
      key={category.id}
      >
      <div className="clue">
          <h3 className="category-title">{category.title}</h3>
        <div className="clue-sides">
          <div className="clue-front">
          </div>
          <div className="clue-back">
          </div>
        </div>
      </div>
    </li>
)
  return(
    <div>
      {renderCategories}
    </div>
  )
}
}



const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}


export default connect(mapStateToProps)(CategoriesContainer);
