import React, { Component } from "react";
import "./Scroll.css";

class Scroll extends Component {

 componentWillMount(){
    window.addEventListener("scroll",()=>{
      var scroll=document.querySelector('#scroll-main');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      scroll.style.opacity = 1;
      scroll.style.position="fixed";
    }else{
      scroll.style.opacity=0;
    }
    })
  }
  

  toTop=()=>{
    window.scroll({top:0,behavior:"smooth"});
  }

  render() {
    return (
      <div className="scroll-main" id="scroll-main">
        <div className="top-scroll"></div>
        <div className="mid-scroll">
          <a href="#about"><i className="fas fa-user-tie"></i></a>
          <a href="#skill"><i className="fas fa-shield-alt"></i></a>
          <a href="#exp"><i className="fas fa-building"></i></a>
          <a href="#project"><i className="fas fa-code"></i></a>
          <a href="#edu"><i className="fas fa-graduation-cap"></i></a>
          <a href="#others"><i className="fas fa-not-equal"></i></a>
        </div>
        <div className="btn-top" id="btn-top">
          <button onClick={()=>this.toTop()}>
            <i className="far fa-hand-point-up"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Scroll;
