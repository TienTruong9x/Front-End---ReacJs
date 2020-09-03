import React, { Component } from "react";
import "./HEADER.css";
import ProcessBar from "./ProcessBar";
import Logo from "./Logo";

class HEADER extends Component {
  render() {
    return (
      <div className="">
        <ProcessBar></ProcessBar>
        <div className="containers animate-bottom">
          <Logo></Logo>
        </div>
      </div>
    );
  }
}

export default HEADER;
