import React, { Component } from "react";

class SizeSetting extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">Size Setting</div>
        <div className="card-body">
          <p className="card-text">
            <i className="fas fa-arrow-up"> Tăng </i><br/>
            <i className="fas fa-arrow-down"> Giảm</i>
          </p>
        </div>
      </div>
    );
  }
}

export default SizeSetting;
