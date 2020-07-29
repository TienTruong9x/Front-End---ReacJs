import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <TaskForm></TaskForm>
          </div>
          <div className="col-8">
            <Controls></Controls>
            <TaskList></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
