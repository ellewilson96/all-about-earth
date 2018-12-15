import React, { Component } from 'react';
import axios from 'axios';

class CategoriesContainer extends Component {
      constructor(props){
          super(props)
          this.state = {
              categories: []
          }
      }
      componentDidMount() {
          axios.get('http://localhost:3001/api/v1/categories.json')
          .then(response => {
              console.log(response)
              this.setState({
                  categories: response.data
              })
          })
          .catch(error => console.log(error))
      }
      render() {
          return (
            <div className="categories-container">
              {this.state.categories.map( category => {
                  return (
                      <div className="single-category" key={category.id}>
                          <h4>{category.title}.</h4>
                      </div>
                  )
              })}
          </div>
          )
      }
  }

  export default CategoriesContainer;
