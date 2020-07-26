import React, { Component } from "react";

class SizeSetting extends Component {

  changeSize(value){
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">Size Setting : {this.props.fontSize}px</div>
        <div className="card-body">
          <p className="card-text">
            <i className="fas fa-arrow-up" onClick={()=>this.changeSize(+5)}> Tăng </i><br/>
            <i className="fas fa-arrow-down" onClick={()=>this.changeSize(-5)}> Giảm</i>
          </p>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
