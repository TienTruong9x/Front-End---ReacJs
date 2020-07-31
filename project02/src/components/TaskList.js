import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    var taskItem = this.props.tasks.map((task, index) => {
      return (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onDelete={this.props.onDelete}
          onEdit={this.props.onEdit}
          onChangeStatus={this.props.onChangeStatus}
        ></TaskItem>
      );
    });
    return (
      <div className="tasklist">
        <table className="table text-center">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name Task</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{taskItem}</tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
