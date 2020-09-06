import React, { Component } from "react";
import avatar from "./../../asset/img/avatar.jpg";

import "./Avatar.css";
class Avatar extends Component {
  render() {
    return (
      <div>
        <div className="avatar_main">
          <div className="avatar_img">
            <img src={avatar} className="img_ava" alt="" />
          </div>
          <div className="avatar_info">
            <div className="name">Nguyễn Tiến Trường</div>
            <div className="gmail_github">
              <p className="gmail"></p>
              <p className="github"></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
