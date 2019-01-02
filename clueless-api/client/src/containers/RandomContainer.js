import React, { Component } from 'react';
import { connect } from 'react-redux'; /* code change */
import Random from '../components/Random'
import { addRandom } from '../actions/index';


class RandomContainer extends Component {

    componentDidMount() {
      this.props.addRandom()
  }

      render() {
        if (this.props.random.length === 0) {
          return (
           <div className="random-title">LOADING...</div>
         )
      }
        return (
          <div>
          <Random random={this.props.random} />
          </div>
        )
      }
  }

const mapStateToProps = (state) => {
    return { random: state.random}
  }


export default connect(mapStateToProps, { addRandom })(RandomContainer);
