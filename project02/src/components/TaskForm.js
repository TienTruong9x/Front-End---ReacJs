import React, { Component } from "react";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.makeid(5),
      nameTask: "",
      selectStatus: "0",
    };
  }

  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  onChangeTaskForm(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  submitTaskForm(event) {
    event.preventDefault();
    this.props.reviceDataFormTaskFormToApp(this.state);
    this.setState({
      id: this.makeid(5),
      nameTask: "",
      selectStatus: "0",
    });
  }

  componentWillReceiveProps(){
    if(this.props.status==="edit"&&this.props.taskEditting){
      this.setState({
        id:this.props.taskEditting.id,
        nameTask:this.props.taskEditting.nameTask,
        selectStatus:this.props.taskEditting.selectStatus,
      })
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">
          <i className="fa fa-tasks" aria-hidden="true"></i>{" "}
          {this.props.status === "edit" ? "Edit task" : "Add a task"}
        </div>
        <div className="card-body">
          <form onSubmit={(event) => this.submitTaskForm(event)}>
            <div className="form-group">
              <label htmlFor="nameTask">Name Task</label>
              <input
                type="text"
                className="form-control"
                id="nameTask"
                placeholder="Enter name task"
                name="nameTask"
                onChange={(event) => this.onChangeTaskForm(event)}
                value={this.state.nameTask}
                required
              />
            </div>
            <select
              className="custom-select"
              name="selectStatus"
              onChange={(event) => this.onChangeTaskForm(event)}
              value={this.state.selectStatus}
            >
              <option value={2}>Đang xét duyệt</option>
              <option value={1}>Kích hoạt</option>
              <option value={0}>Từ chối</option>
            </select>
            <button type="submit" className={this.props.status === "edit" ? "btn btn-warning mt-3" : "btn btn-success mt-3"}>
              <i className={this.props.status === "edit" ? "fas fa-compress-alt" : "fa fa-plus"}  aria-hidden="true"></i>{" "}
              {this.props.status === "edit" ? "Change" : "Push"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
