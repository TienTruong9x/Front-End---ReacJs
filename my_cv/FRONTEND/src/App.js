import React, { Component } from "react";
import Loading from "./components/others/Loading";
import { connect } from "react-redux";
import HEADER from "./components/header/HEADER";

class App extends Component {
  constructor(props) {
    super(props);
  }

  showPage = () => {
    if (this.props.isLoadding) {
      return <Loading></Loading>;
    } else {
      return <HEADER></HEADER>;
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
