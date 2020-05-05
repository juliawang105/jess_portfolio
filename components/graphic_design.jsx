import React from 'react';
import { graphic_design } from '../images/graphic_design';
import NavBar from './navbar';
import '../stylesheets/graphic_design.css'

class GraphicDesign extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gd: true
    };
  };

  attachImages(){
    
    let images = graphic_design;
    let imgArr = images.map(img => {
      let newImg = document.createElement('img');
      newImg.src = img.imageUrl;
      return newImg;
    });

    // debugger
    return imgArr;
  }

  render(){
    let test = this.attachImages()[0]
    // debugger
    return(
      <div>
        <NavBar state={this.state}/>
        <div className=".gd-images">
          
        </div>
      </div>
      
    )
  }
};

export default GraphicDesign;