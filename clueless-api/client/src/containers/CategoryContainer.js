import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import Category from '../components/Category'
import { addCategory } from '../actions/index';


class CategoryContainer extends Component {

  componentDidMount() {
    this.props.addCategory()
  }

render() {
  if (this.props.category.length === 0) {
    return (
     <div className="category-title">LOADING...</div>
   )
}
  return (
    <div>
    <Category category={this.props.category} />
    </div>
  )
}
}

  const mapStateToProps = (state) => {
      return { category: state.category }
    }



export default connect(mapStateToProps, { addCategory })(CategoryContainer);
