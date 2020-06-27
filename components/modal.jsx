import React from 'react';

class Modal extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    // debugger
    let modalShow;
    let show = this.props.show;
    if(!this.props.show){
      modalShow = "modal-hide";
    } else {
      modalShow = "modal-show"
    }
    return(
      <div className={modalShow}>
        
        <div className="modal-child">Hello</div>
        
      </div>
    )
    
  }
};

export default Modal;