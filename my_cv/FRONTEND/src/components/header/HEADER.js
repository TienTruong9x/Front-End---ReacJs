import React, { Component } from "react";
import "./HEADER.css";
import ProcessBar from "./ProcessBar";
import Logo from "./Logo";
import Navigate from "./Navigate";
import Info from "./Info";

class HEADER extends Component {
  render() {
    return (
      <div className="">
        <ProcessBar></ProcessBar>
        <div className="container animate-bottom">
          <div className="header">
            <Logo></Logo>
            <Navigate></Navigate>
          </div>
        </div>
          <Info></Info>
      </div>
    );
  }
}

export default HEADER;
