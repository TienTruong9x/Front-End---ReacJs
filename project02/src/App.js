import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditting: "add",
      taskEditting: [],
    };
  }

  sendDataFormTF(newTask) {
    var { tasks } = this.state;
    if (this.state.isEditting === "edit") {
      var indexTask = tasks.findIndex((task) => {
        return task.id === newTask.id;
      });
      tasks[indexTask] = newTask;
      this.setState({
        isEditting: "add",
      });
    } else {
      tasks.push(newTask);
    }
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  }

  onDelete = (id) => {
    var { tasks } = this.state;
    var delTask = tasks.findIndex((task) => {
      return task.id === id;
    });
    tasks.splice(delTask, 1);
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  onEdit = (id) => {
    this.setState({
      isEditting: "edit",
    });
    var { tasks } = this.state;
    var indexTask = tasks.findIndex((task) => {
      return task.id === id;
    });
    this.setState(
      {
        taskEditting: tasks[indexTask],
      },
      () => {
        this.setState({
          taskEditting: tasks[indexTask],
        });
      }
    );
  };

  onChangeStatus = (id) => {
    var { tasks } = this.state;
    var editTask = tasks.findIndex((task) => {
      return task.id === id;
    });
    if (tasks[editTask].selectStatus === "0") {
      tasks[editTask].selectStatus = "2";
    } else if (tasks[editTask].selectStatus === "2") {
      tasks[editTask].selectStatus = "1";
    } else if (tasks[editTask].selectStatus === "1") {
      tasks[editTask].selectStatus = "0";
    }
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <TaskForm
              reviceDataFormTaskFormToApp={(newTask) =>
                this.sendDataFormTF(newTask)
              }
              status={this.state.isEditting}
              taskEditting={this.state.taskEditting}
            ></TaskForm>
          </div>
          <div className="col-8">
            <Controls></Controls>
            <TaskList
              onDelete={this.onDelete}
              onEdit={this.onEdit}
              onChangeStatus={this.onChangeStatus}
            ></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
