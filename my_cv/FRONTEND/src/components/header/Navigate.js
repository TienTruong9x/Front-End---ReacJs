import React, { Component } from "react";
import "./Navigate.css";

class Navigate extends Component {
  render() {
    return (
      <div className="nav">
        <a href="/" className="hd-home" data-text="HOME">
          HOME
        </a>
        <a href="#about" className="hd-about" data-text="ABOUT">
          ABOUT
        </a>
        <a href="#skills" className="hd-skills" data-text="SKILLS">
          SKILLs
        </a>
        <a
          href="#experiences"
          className="hd-experiences"
          data-text="EXPERIENCES"
        >
          EXPERIENCES
        </a>
        <a href="#projects" className="hd-projects" data-text="PROJECTS">
          PROJECTS
        </a>
        <a href="#education" className="hd-education" data-text="EDUCATION">
          EDUCATION
        </a>
      </div>
    );
  }
}

export default Navigate;
