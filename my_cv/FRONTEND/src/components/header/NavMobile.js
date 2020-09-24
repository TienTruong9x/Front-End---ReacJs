import React, { Component } from "react";
import "./NavMobile.css";
export default class NavMobile extends Component {
  componentDidMount() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener("click", () => {
      //Animate Links
      navLinks.classList.toggle("open");
      links.forEach((link) => {
        link.classList.toggle("fade");
      });
      //Hamburger Animation
      hamburger.classList.toggle("toggle");
    });
  }
  render() {
    return (
      <div>
        <nav>
          <div className="hamburger">
            <div className="line1" />
            <div className="line2" />
            <div className="line3" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#skill">SKILLs</a>
            </li>
            <li>
              <a href="#exp">EXPERIENCES</a>
            </li>
            <li>
              <a href="#project">PROJECTS</a>
            </li>
            <li>
              <a href="#edu">EDUCATION</a>
            </li>
            <li>
              <a href="#others">OTHERS</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
