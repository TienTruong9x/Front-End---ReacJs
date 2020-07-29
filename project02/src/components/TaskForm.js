import React, { Component } from "react";

class TaskForm extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Thêm Công Việc</div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="nameTask">Name Task</label>
              <input
                type="text"
                className="form-control"
                id="nameTask"
                placeholder="Enter name task"
              />
            </div>
            <select class="custom-select">
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <button type="submit" className="btn btn-success mt-3">
              Thêm
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
