import React, { Component } from 'react';

class Result extends Component {
  
  render(){
    return(
        <div className="form-group">
          <label >Nội dung :</label>
          <input type="text"
            className="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
          <small id="helpId" className="form-text text-muted">Help text</small>
        </div>
    );
  }
}

export default Result;
