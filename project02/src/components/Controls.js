import React, { Component } from "react";
import Search from "./Search";
import Sort from "./Sort";

class Controls extends Component {
  render() {
    return (
      <div className="control">
        <button type="button" className="btn btn-primary rounded-circle" > <i className="fa fa-plus" aria-hidden="true"></i></button>
        <div className="row">
          <div className="col-8">
            <Search></Search>
          </div>
          <div className="col-4">
            <Sort></Sort>
          </div>
        </div>
      </div>
    );
  }
}

export default Controls;
