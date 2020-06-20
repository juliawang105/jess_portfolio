import React from 'react';
import '../stylesheets/navbar.css';
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component{
  constructor(props){
    super(props)
    // debugger
  };

  render(){
    // debugger
    return (
      <div className="navbar">
        <div className="nav-button">Home/logo</div>
        <div className="nav-button">About</div>
        <NavLink to="/graphic_design" activeClassName="curr" className="nav-button">Graphic Design</NavLink>
        <div className="nav-button">Logos</div>
        <NavLink to="/illustrations" activeClassName="curr" className="nav-button" className="nav-button">Illustrations</NavLink>
        <div className="nav-button">Contact</div>
      </div>
    );
  }
};

export default NavBar;