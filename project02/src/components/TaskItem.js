import React, { Component } from "react";

class TaskItem extends Component {
  genderStatus(){
    if(this.props.task.selectStatus==="1"){
      return <i className="fas fa-check bg-success p-2 text-white rounded-circle"></i>
    }
    else if(this.props.task.selectStatus==="2"){
      return <i className="fa fa-spinner fa-spin text-warning p-2 fa-2x"></i>
    }
    else{
      return <i className="fas fa-times -circle bg-danger p-2 text-white rounded-circle" ></i>
    }
  }

  onDelete = ()=>{
    this.props.onDelete(this.props.task.id);
  }

  render() {
    return (
      <tr>
        <th scope="row">{this.props.index+1}</th>
        <td>{this.props.task.nameTask}</td>
        <td>
        {this.genderStatus()}
        </td>
        <td>
        <button type="button" 
        className="btn btn-outline-info mr-2"
        onClick={this.onDelete}
        > 
        <i className="fas fa-edit    "> Sửa </i>
        </button>
        <button type="button" className="btn btn-outline-danger"><i className="fa fa-times" aria-hidden="true" onClick={this.onDelete}> Xóa </i></button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
