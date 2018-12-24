import React, { Component } from 'react';

import { connect } from 'react-redux'; /* code change */
import Category from '../components/Category'


class CategoryContainer extends Component {
  constructor(props){
      super(props)
          this.state = {
              category: []
          }
      }

      componentDidMount() {
        mapDispatchToProps()
      }


    render() {
        return (
          <div>
          <Category category={this.props.category}/>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { category: state.category}
  }

  const mapDispatchToProps = (dispatch) => {
      return { type: "ADD_CATEGORY" }
    }

  export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
