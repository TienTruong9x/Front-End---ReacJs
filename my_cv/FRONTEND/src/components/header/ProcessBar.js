import React, { Component } from "react";
import "./ProcessBar.css";

class ProcessBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="myProgress">
        <div id="myBar"></div>
      </div>
    );
  }
}

export default ProcessBar;
