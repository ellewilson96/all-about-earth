import React, { Component } from 'react';
import '../styles/NavBar.css'
import { NavLink } from 'react-router-dom';
import Points from '../components/Points'
import alex from '../alex-trebek.jpg'

class NavBar extends Component {
render() {
    return (
      <div>
        <header>
          <nav>
          <div className="links">
             <ul>
               <li><NavLink to="/">Home</NavLink></li>
               <li><NavLink to="/about">About</NavLink></li>
               <li><NavLink to="/categories">By Category</NavLink></li>
               <li><NavLink to="/clues">All Clues</NavLink></li>
               <li><NavLink to="/random">Random</NavLink></li>
             </ul>
             </div>
             <div>
             <Points />
             </div>
             <img src={alex} className="alex" alt="iconic" />
             <div className="jservice">powered by <a href="http://jservice.io">jService</a></div>
         <div className="title">Clueless Trivia</div>
        </nav>
       </header>
      </div>
    )
}
}

export default NavBar;
