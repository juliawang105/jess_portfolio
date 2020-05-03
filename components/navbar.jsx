import React from 'react';
import navbar from '../stylesheets/navbar.css'

class NavBar extends React.Component{
  constructor(props){
    super(props)
  };

  render(){
    return (
      <div className="navbar">
        <div className="nav-button">Home/logo</div>
        <div className="nav-button">About Me</div>
        <div className="nav-button">Graphic Design</div>
        <div className="nav-button">Illustrations</div>
        <div className="nav-button">Contact</div>
      </div>
    );
  }
};

export default NavBar;