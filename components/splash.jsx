import React from 'react';
import '../stylesheets/splash.css';
class Splash extends React.Component {
 

  render(){
    return (
      <div className="splash">
        <img src="https://jqw-portfolio.s3-us-west-1.amazonaws.com/Other+elements/JQW_Signature.png" alt=""/>
        <div className="splash-button">About</div>
        <div className="splash-button">Graphic Design</div>
        <div className="splash-button">Logos</div>
        <div className="splash-button">Illustrations</div>
        <div className="splash-button">Contact</div>
        
      </div>
    );}
};

export default Splash;