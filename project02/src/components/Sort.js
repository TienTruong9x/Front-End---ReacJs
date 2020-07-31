import React, { Component } from "react";

class Sort extends Component {
  render() {
    return (
      <div className="sort">
        <select className="custom-select" id="inputGroupSelect04">
          <option >Choose...</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
    );
  }
}

export default Sort;
