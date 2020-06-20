import React from 'react';

class IllustrateItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img className="gd-image" src={this.props.imageUrl}></img>
    )
  }
};

export default IllustrateItem;