import React, { Component } from "react";

class TaskItem extends Component {
  genderStatus() {
    if (this.props.task.selectStatus === "1") {
      return (
        <i className="fas fa-check bg-success p-2 text-white rounded-circle fa-1x"></i>
      );
    } else if (this.props.task.selectStatus === "2") {
      return <i className="fa fa-spinner fa-spin text-warning p-2 fa-1x"></i>;
    } else {
      return (
        <i className="fas fa-times -circle bg-danger p-2 text-white rounded-circle fa-1x"></i>
      );
    }
  }

  onDelete = () => {
    this.props.onDelete(this.props.task.id);
  };
  onEdit = () => {
    this.props.onEdit(this.props.task.id);
  };
  onChangeStatus = () => {
    this.props.onChangeStatus(this.props.task.id);
  };
  render() {
    return (
      <tr>
        <th scope="row">{this.props.index + 1}</th>
        <td>{this.props.task.nameTask}</td>
        <td onClick={this.onChangeStatus} style={{ cursor: "pointer" }}>
          {this.genderStatus()}
        </td>
        <td>
          <button
            type="button"
            className="btn btn-outline-info mr-2"
            onClick={this.onEdit}
          >
            <i className="fas fa-edit"> Edit </i>
          </button>
          <button type="button" className="btn btn-outline-danger">
            <i
              className="fa fa-times"
              aria-hidden="true"
              onClick={this.onDelete}
            ></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
