import React, { Component } from 'react';

class Reset extends Component {
  
  onReset(){
    this.props.onResetSate();
  }
  render(){
    return(
        <button type="button" name="" id="" className="btn btn-warning btn-lg btn-block" onClick={()=>this.onReset()}>Reset</button>
    );
  }
}

export default Reset;
