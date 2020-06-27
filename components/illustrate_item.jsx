import React from 'react';
import Modal from './modal';
import "../stylesheets/modal.css"

class IllustrateItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let currState = this.state.show;
    this.setState({show: !currState});
    debugger
  }

  render() {
    return (
      <div>
        <img onClick={this.handleClick} className="gd-image" src={this.props.imageUrl}></img>
        <Modal show={this.state.show} />
      </div>
      
    )
  }
};

export default IllustrateItem;