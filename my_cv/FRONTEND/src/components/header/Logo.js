import React, { Component } from "react";
import './Logo.css';
import logo from './../../asset/img/logo.png';
class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} className="hd-logo" alt="logoCV"/>
      </div>
    );
  }
}

export default Logo;
