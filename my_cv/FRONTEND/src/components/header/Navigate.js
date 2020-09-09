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
        <a href="#skill" className="hd-skills" data-text="SKILLS">
          SKILLs
        </a>
        <a
          href="#exp"
          className="hd-experiences"
          data-text="EXPERIENCES"
        >
          EXPERIENCES
        </a>
        <a href="#project" className="hd-projects" data-text="PROJECTS">
          PROJECTS
        </a>
        <a href="#edu" className="hd-education" data-text="EDUCATION">
          EDUCATION
        </a>
        <a href="#others" className="hd-education" data-text="OTHERS">
          OTHERS
        </a>
      </div>
    );
  }
}

export default Navigate;
