import React, { Component } from 'react';
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
          .catch(error => this.setState({
            error
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

  export default CategoryContainer;
