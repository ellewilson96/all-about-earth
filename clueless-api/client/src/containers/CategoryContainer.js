import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import axios from 'axios';
import Category from '../components/Category'


class CategoryContainer extends Component {
  constructor(props){
      super(props)
          this.state = {
              category: []
          }
      }

      componentDidMount() {
        axios.get('http://localhost:3001/api/v1/categories.json')
            .then(response => this.setState({
                    category: response.data
          }))
      }


    render() {
        return (
          <div>
          <Category category={this.state.category}/>
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
