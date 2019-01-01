import React, { Component } from 'react';
import '../styles/Category.css'
import Answer from './Answer'
import { Link } from 'react-router-dom'


class Category extends Component {


reloadPage() {
      window.location.reload();
    }


  render() {
    const byCategory = this.props.category.clues.map((clue, id) =>
      <li
        key={clue.id}
        >
        <div className="clue">
          <h2 className="clue-value">${clue.value}</h2>
          <div className="clue-sides">
            <div className="clue-front">
              <h4>{clue.question}</h4>
            </div>
            <div>
            <Answer clue={clue}/>
            </div>
            <div>
            </div>
          </div>
        </div>
      </li>
  )

  return(
    <div>
      <div className="category-title">
      PLAY BY CATEGORY!
      </div>
      <div className="category-card">
    <li
      key={this.props.category.id}
      >
        <div className="category">
          <h2>{this.props.category.title}</h2>
            <div className="category-sides">
            <h4>{this.props.category.clues_count} CLUES</h4>
            <div class="game-button">
            <button type="button" onClick={() => this.reloadPage()}> <span>TRY ANOTHER</span> </button>
            </div>
          </div>
        </div>
    </li>
  </div>
  <div className="clues-card">
    {byCategory}
   </div>
  </div>
  )


}
}

export default Category;
