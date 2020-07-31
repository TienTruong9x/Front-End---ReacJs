import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import Controls from "./components/Controls";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[]
    }
  }
  componentDidMount(){
    if(localStorage.getItem("tasks")){
      var tasks=JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks:tasks
      });
    }
  }

  sendDataFormTF(newTask){
    var {tasks}=this.state;
    tasks.push(newTask);
    this.setState({
      tasks:tasks
    });
    localStorage.setItem("tasks",JSON.stringify(this.state.tasks));
  }
  
 onDelete=(id)=>{
    console.log(id);
 }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <TaskForm reviceDataFormTaskFormToApp={(newTask)=>this.sendDataFormTF(newTask)}></TaskForm>
          </div>
          <div className="col-8">
            <Controls></Controls>
            <TaskList tasks={this.state.tasks} onDelete={this.onDelete}></TaskList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
