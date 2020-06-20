import React from 'react';
import { illustrations } from "../images/illustrations";
import NavBar from "./navbar";
import IllustrateItem from './illustrate_item';

class Illustrations extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const images = illustrations.map(image => {
      return (
        <IllustrateItem
          key={image.id}
          title={image.title}
          imageUrl={image.imageUrl}
        />
      )
    })
    return(
      <div className='gd'>
        <NavBar state={this.state} />
        <div className="gd-images">{images}</div>

      </div>
      
    )
  }
}

export default Illustrations;