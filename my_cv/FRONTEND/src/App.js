import React, { Component } from "react";
import Loading from "./components/others/Loading";
import { connect } from "react-redux";
import HEADER from "./components/header/HEADER";
import Avatar from "./components/body/Avatar";

class App extends Component {
  constructor(props) {
    super(props);
  }

  showPage = () => {
    if (this.props.isLoadding) {
      return <Loading></Loading>;
    } else {
      return (
        <div>
          {/* // Start Header */}
          <HEADER></HEADER>
          {/* // End Header */}
          {/* // Start Body */}
          <Avatar></Avatar>
          {/* // End Body */}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="" id="App">
        {this.showPage()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoadding: state.isLoadding,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
