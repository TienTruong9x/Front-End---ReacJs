import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form className="form-inline input-group">
          <div class="input-group w-100">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="input-group-append">
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
