import React, { Component } from "react";
import { connect } from "react-redux";

class EditItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title:"",
        content:"",
        id:""
    };
  }

  
  componentWillMount() {
    this.setState({
      title:this.props.editItem.title,
      content:this.props.editItem.content,
      id:this.props.editItem.id,
    })  
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
    this.props.editDataSTotore(this.state);
    this.props.onAlert("Bạn vừa sửa : "+this.state.title,"edit");
    this.props.setIsEditToFalse();
    this.setState({
        title:"",
        content:"",
        id:null
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
              defaultValue={this.props.editItem.title}
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
            defaultValue={this.props.editItem.content}
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
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editDataSTotore: (editItem) => {
      dispatch({type:"SAVE_EDIT_ITEM",editItem})
    },
    setIsEditToFalse: () => {
      dispatch({type:"EDIT_ITEM"})
    },
    onAlert: (alertContent,doing) => {
      dispatch({type:"ALERT_ON",alertContent,doing})
    },
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditItem)

