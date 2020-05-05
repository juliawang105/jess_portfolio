import React from 'react';
import '../stylesheets/splash.css';
class Splash extends React.Component {
 

  render(){
    return (
      <div className="splash">
        <div>JQW LOGO</div>
        <div className="splash-button">About</div>
        <div className="splash-button">Graphic Design</div>
        <div className="splash-button">Logos</div>
        <div className="splash-button">Illustrations</div>
        <div className="splash-button">Contact</div>
        
      </div>
    );}
};

export default Splash;