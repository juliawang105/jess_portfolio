import React from 'react';

class Modal extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    let modalShow;
    if(!this.props.show){
      modalShow= "modal-hide";
    } else if(this.props.show === true) {
      modalShow= "modal-show"
    }
    return(
      <div className={modalShow}>
        <div className="modal-child" onClick={this.props.handleClick}>
          <img className="modal-img" src={this.props.image}/>
        </div>
        
      </div>
    )
    
  }
};

export default Modal;