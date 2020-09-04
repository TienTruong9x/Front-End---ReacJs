import React, { Component } from "react";
import "./Loading.css";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [
        "Chào bạn!",
        "<3 <3 <3 ",
        "Cười lên nào",
        "Yêu bạn",
        "Mình là Trường!!",
        "Xin Chào!",
        "Yêu bạn",
        "Yêu bạn",
        "Vui lên <3",
        "Chào mừng",
      ],
      status: 0,
    };
  }

  showQuote = () => {
    return this.state.quote[
      Math.floor(Math.random() * this.state.quote.length)
    ];
  };
  
  showStatus = () => {
    clearInterval();
    let counter = 0;
    setInterval(() => {
      if (counter >= 99) {
        setTimeout(() => {
          this.props.changeLoad();
        }, 700);
      }
      if (counter >= 100) {
        clearInterval();
      } else {
        counter += 5;
        ReactDOM.render(counter + "%", document.querySelector("#status"));
      }
    }, 100);
  };

  render() {
    return (
      <div>
        <div className="quote animate__animated animate__fadeInDown">
          {this.showQuote()}
        </div>
        <div className="heart">
          <div className="left" />
          <div className="right" />
        </div>

        <div id="loader">
          <svg x="0px" y="0px" viewBox="0 0 298 53.9">
            <path
              className="st0"
              d="M297.5,41.2h-76.6c-0.5,0-0.9,0.4-1,0.8l-1.6,11.3l-3.1-32c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8
                       l-5.3,25.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6l-2.3,4.8h-107c0,0,0,0,0,0H82c-1.6,0-2.2,1.1-2.2,1.6
                       l-1.6,11.3l-3.1-52c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.3-1,0.8l-9.3,45.5l-2.3-10.9c-0.1-0.4-0.4-0.7-0.9-0.8c-0.4,0-0.8,0.2-1,0.6
                       l-2.3,4.8H0.5"
            />
          </svg>
        </div>
        <div className="status" id="status">
          {this.showStatus()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeLoad: () => {
      dispatch({ type: "LOADED" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
