import React, { Component } from "react";
import avatar from "./../../asset/img/avatar.jpg";
import "./Avatar.css";

class Avatar extends Component {
  render() {
    return (
      <div>
        <div className="avatar_main animate__animated animate__flash">
          <div className="avatar_img">
            <img src={avatar} className="img_ava" alt="" />
          </div>
          <div className="avatar_info">
            <div className="name">Nguyễn Tiến Trường</div>
            <div className="gmail_github">
              <p className="gmail"><i className="fas fa-paper-plane"></i> : nguyenthientruong1998@gmail.com</p>
              <p className="github"><i className="fab fa-git-alt"></i>: https://github.com/TienTruong9x</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Avatar;
