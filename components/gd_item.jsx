import React from 'react'

class GDItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <img className="gd-image" src={this.props.imageUrl}></img>
    )
  }
};

export default GDItem