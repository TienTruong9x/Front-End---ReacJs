import React, { Component } from "react";
import { connect } from "react-redux";
class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  edittingItem=()=>{
    this.props.changeEdit();
    this.props.getEditData(this.props.oneNote);
  }

  render() {
    return (
        <div id="accordion ">
        <div className="card mt-4">
          <div
            className="card-header d-flex justify-content-between"
            id="heading"
            data-toggle="collapse"
            data-target={"#stt"+this.props.i}
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            <h5 className="mb-0">
              <button className="btn btn-link collapsed">
                <i className="fa" aria-hidden="true" />
                {this.props.title}
              </button>
            </h5>
            <div>
            <button className="btn btn-outline-warning mr-3" onClick={this.edittingItem}>Sửa</button>
            <button className="btn btn-outline-danger">Xóa</button>
            </div>
          </div>
          <div
            id={"stt"+this.props.i}
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body"> {this.props.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEdit: () => {
      dispatch({type:"EDIT_ITEM"});
    },
    getEditData: (editItem) => {
      dispatch({type:"GET_EDIT_ITEM",editItem});
    }
  }
}
export default connect(null, mapDispatchToProps)(NoteItem)
