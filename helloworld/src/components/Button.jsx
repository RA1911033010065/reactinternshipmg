import React, { Component } from 'react';
class CustomButton extends Component {
    constructor(props) {
      super(props); 
  }
  
  render() { 
    const {text,onClick} = this.props;

    return <div onClick={() => {onClick()}}><span>{text}</span></div>
  }
}  
  export default CustomButton;
  