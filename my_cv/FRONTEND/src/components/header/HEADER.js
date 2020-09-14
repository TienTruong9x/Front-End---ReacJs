import React, { Component } from "react";
import "./HEADER.css";
import ProcessBar from "./ProcessBar";
import Logo from "./Logo";
import Navigate from "./Navigate";
import Info from "./Info";
import NavMobile from "./NavMobile";
import { connect } from "react-redux";

class HEADER extends Component {
  showNav = () => {
     var w = window.innerWidth;
    this.props.reSize(w);
    window.addEventListener("resize", () => {
      w = window.innerWidth;
      this.props.reSize(w);
    });

    if(this.props.isMobile){
      return <NavMobile></NavMobile>
    }else{
      return <Navigate></Navigate>
    }

  };
  render() {
    return (
      <div className="">
        <ProcessBar></ProcessBar>
        <div className="container animate-bottom">
          <div className="header">
            <Logo></Logo>
            {this.showNav()}
          </div>
        </div>
        <Info></Info>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isMobile:state.isMobile
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    reSize: (w) => {
      dispatch({type:"RESIZE",w})
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HEADER)
