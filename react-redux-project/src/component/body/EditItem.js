import React, { Component } from "react";
import { connect } from "react-redux";

class EditItem extends Component {
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
    this.setState({
        title:"",
        content:""
    });
  }

  render() {
    console.log(this.props.editItem);
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
              value={this.props.editItem.title}
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
            value={this.props.editItem.content}
          />
        </div>
        <button type="submit" className="btn btn-info mb-2 btn-block">
          Edit
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editItem: state.editItem
  }
}


export default connect(mapStateToProps)(EditItem)

