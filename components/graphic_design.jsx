import React from 'react';
import { graphic_design } from '../images/graphic_design';
import NavBar from './navbar';
import GDItem from './gd_item'
import '../stylesheets/graphic_design.css'

class GraphicDesign extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gd: true
    };
  };

  render(){
    let images = graphic_design.map( image => {
      return(
        <GDItem
          key={image.id}
          title={image.title}
          imageUrl={image.imageUrl}
        />
      )
    })
    // debugger
    return(
      <div className='gd'>
        <NavBar state={this.state}/>
        <div className="gd-images">{images}</div>
        
      </div>
      
    )
  }
};

export default GraphicDesign;