import React, { Component } from "react";
import "./App.css";
import Note from "./component/body/Note";
import AddNew from "./component/body/AddNew";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getData=(item)=>{
    console.log(item);
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <Note></Note>
            </div>
            <div className="col-2"><AddNew sendData={this.getData}></AddNew></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
