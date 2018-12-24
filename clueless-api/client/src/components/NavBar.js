import React, { Component } from 'react';
import Points from './Points'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom';
import alex from '../alex-trebek.jpg'

class NavBar extends Component {
render() {
    return (
      <div>
        <header>
          <nav>
          <div className="links">
             <ul>
               <li><Link to="/">Home</Link></li>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/categories">By Category</Link></li>
               <li><Link to="/clues">All Clues</Link></li>
               <li><Link to="/random">Random</Link></li>
             </ul>
             </div>
             <img src={alex} className="alex" alt="iconic" />
             <div className="jservice">powered by <a href="http://jservice.io">jService</a></div>
         <div className="title">Clueless Trivia</div>
         <div className="points-button">
          <Points />
         </div>
        </nav>
       </header>
      </div>
    )
}
}

export default NavBar;
