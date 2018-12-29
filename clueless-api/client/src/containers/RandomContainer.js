import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import Random from '../components/Random'
import { addRandom } from '../actions/index';


class RandomContainer extends Component {
  state = {
      random: []
    }

    componentDidMount() {
      this.setState({
      random: this.props.addRandom(this.state)
    })
  }
      render() {
        if (this.props.random.length === 0) {
          return (
           <div>There aren't any random clues !</div>
         )
      }
        return (
          <div>
          <Random random={this.props.random[0]} />
          </div>
        )
      }
  }

const mapStateToProps = (state) => {
    return { random: state.random}
  }


export default connect(mapStateToProps, { addRandom })(RandomContainer);
