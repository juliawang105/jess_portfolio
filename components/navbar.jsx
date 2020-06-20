import React from 'react';
import '../stylesheets/navbar.css';
import { NavLink, Link } from 'react-router-dom'

class NavBar extends React.Component{
  constructor(props){
    super(props)
    // debugger
  };

  render(){
    // debugger
    return (
      <div className="navbar">
        <Link to="/" className="nav-button">Home/logo</Link>
        <NavLink to="/about" activeClassName="curr" className="nav-button">About</NavLink>
        <NavLink to="/graphic_design" activeClassName="curr" className="nav-button">Graphic Design</NavLink>
        <div className="nav-button">Logos</div>
        <NavLink to="/illustrations" activeClassName="curr" className="nav-button" className="nav-button">Illustrations</NavLink>
        <div className="nav-button">Contact</div>
      </div>
    );
  }
};

export default NavBar;