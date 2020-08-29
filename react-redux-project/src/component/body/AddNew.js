import React, { Component } from "react";
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
    this.props.sendData(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
            />
          </div>
          <label htmlFor="content">Nội dung NOTE</label>
          <textarea
            className="form-control"
            id="content"
            rows={5}
            defaultValue={""}
            name="content"
            required
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-warning mb-2 btn-block">
          Submit
        </button>
      </form>
    );
  }
}

export default AddNew;
