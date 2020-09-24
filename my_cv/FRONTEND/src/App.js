import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "./components/others/Loading";
import HEADER from "./components/header/HEADER";
import Avatar from "./components/body/Avatar";
import TimeLine from "./components/body/TimeLine";
<<<<<<< HEAD
=======
import Contact from "./components/footer/Contact";
import Scroll from "./components/footer/Scroll";
>>>>>>> 8ddb840227073bd2713b889db2d47142dfb8f927

class App extends Component {
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
          <TimeLine></TimeLine>
          {/* // End Body */}
          {/* // Start Footer */}
          <Contact></Contact>
          <Scroll></Scroll>
          {/* // End Footer */}
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
