import React from 'react';
import '../stylesheets/splash.css';
import { Link } from 'react-router-dom'
class Splash extends React.Component {
 

  render(){
    return (
      <div className="splash">
        <img src="https://jqw-portfolio.s3-us-west-1.amazonaws.com/Other+elements/JQW_Signature.png" alt=""/>
        <Link to={'/about'} className="splash-button">About</Link>
        <Link to={'/graphic_design'} className="splash-button">Graphic Design</Link>
        <Link className="splash-button">Logos</Link>
        <Link to={'/illustrations'}className="splash-button">Illustrations</Link>
        <Link className="splash-button">Contact</Link>
      </div>
    );}
};

export default Splash;