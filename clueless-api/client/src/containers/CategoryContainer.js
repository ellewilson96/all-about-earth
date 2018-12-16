import React, { Component } from 'react';
import Category from '../components/Category'
import { connect } from 'react-redux'; /* code change */
import axios from 'axios';

class CategoryContainer extends Component {
  constructor(props){
      super(props)
          this.state = {
              category: []
          }
      }

  componentDidMount() {
      axios.get('http://localhost:3001/api/v1/categories.json')
          .then(response => {
              console.log(response.data)
              this.setState({
                  category: response.data
              })
          })
      .catch(error => console.log(error))
    }
    render() {
        return (
          <div className="category-container">
          <h3><Category /></h3>
        </div>
        )
    }
  }

  const mapStateToProps = (state) => {
    return { category: state.category };
  };

  export default connect(mapStateToProps)(CategoryContainer);
