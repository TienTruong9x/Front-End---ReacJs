import React, { Component } from 'react';
import "./App.css";
import News from "./component/News";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <p>Well come to React - Redux</p>
          {this.props.dulieu}
        </header>
        <News></News>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    dulieu: state.num
  }
}
export default connect(mapStateToProps)(App)
