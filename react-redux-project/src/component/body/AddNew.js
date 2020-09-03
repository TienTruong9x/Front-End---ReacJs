import React, { Component } from "react";
import { connect } from "react-redux";

class AddNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        content:""
    };
  }
  handleChange=(event)=>{
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addDataStore(this.state);
    this.props.onAlert("Bạn vừa thêm mới : "+this.state.title,"add");
    this.setState({
        title:"",
        content:""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mt-3">
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="title">Tiêu đề NOTE</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Nhập tiêu đề note"
              name="title"
              required
              onChange={this.handleChange}
              value={this.state.title}
            />
          </div>
          <label htmlFor="content">Nội dung NOTE</label>
          <textarea
            className="form-control"
            id="content"
            rows={5}
            name="content"
            required
            onChange={this.handleChange}
            value={this.state.content}
          />
        </div>
        <button type="submit" className="btn btn-warning mb-2 btn-block">
          Submit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addDataStore: (newItem) => {
      dispatch({type:"ADD_NEW",newItem})
    },
    onAlert: (alertContent,doing) => {
      dispatch({type:"ALERT_ON",alertContent,doing})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNew)

