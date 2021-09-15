import React, { Component } from 'react';
import CustomButton from './components/Button';
import './App.css';
var val2=0;
class App extends Component {
  constructor() {
    super(); 
    this.state = {
      val: 0,
    };
}


render() { 
  console.log(this.state.val,val2,'value')
  return ( 
    <>
      <h1>COUNTER</h1>
      { <h2>{this.state.val}</h2> }
      {/* { <Button val={this.state.val}></Button> } */}
      <div onClick={() => {this.setState({val: this.state.val+1})} }><span>INC</span></div>
      <div onClick={() => {this.setState({val: this.state.val-1})} }><span>DEC</span></div>
      { <h2>{val2}</h2> }
      <div onClick={() => {val2++} }><span>INCVAR2</span></div>
      <div onClick={() => {val2--} }><span>DECVAR2</span></div>
      <CustomButton text = {"INC"} onClick={() => {this.setState({val: this.state.val+1})} } />
      <CustomButton text = {"Decrement"} onClick={() => {this.setState({val: this.state.val-1})} } />
    </>
    );
  }
}
 
export default App;


