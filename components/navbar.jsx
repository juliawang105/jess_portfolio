import React from 'react';
import '../stylesheets/navbar.css'

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
        <div className="nav-button">Graphic Design</div>
        <div className="nav-button">Logos</div>
        <div className="nav-button">Illustrations</div>
        <div className="nav-button">Contact</div>
      </div>
    );
  }
};

export default NavBar;