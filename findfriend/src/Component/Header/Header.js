import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav class="nav">
          <div class="logo">
            <img
              src="https://loga.vn/FileUpload/files/My_friends.jpg"
              alt="Logo Image"
            />
          </div>
          <div class="hamburger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
          <ul class="nav-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <button class="login-button" href="#">
                Đăng nhập
              </button>
            </li>
            <li>
              <button class="join-button" href="#">
                Đăng ký
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
