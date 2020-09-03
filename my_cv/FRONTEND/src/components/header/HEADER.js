import React, { Component } from "react";
import ProcessBar from "./ProcessBar";

class HEADER extends Component {
  render() {
    return (
      <div className="animate__animated animate__fadeInUp">
        <ProcessBar></ProcessBar>
      </div>
    );
  }
}

export default HEADER;
