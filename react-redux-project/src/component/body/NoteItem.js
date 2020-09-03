import React, { Component } from "react";
import { connect } from "react-redux";
class NoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  edittingItem = () => {
    this.props.changeEdit();
    this.props.getEditData(this.props.oneNote);
  };

  deletingItem = () => {
    this.props.getDeleteData(this.props.oneNote.id);
    this.props.onAlert("Bạn xóa : "+this.props.oneNote.title,"delete");
  };
  render() {
    return (
      <div id="accordion ">
        <div className="card mt-4">
          <div
            className="card-header d-flex justify-content-between"
            id="heading"
          >
            <h5
              className="mb-0"
              data-toggle="collapse"
              data-target={"#stt" + this.props.i}
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <button className="btn btn-link collapsed">
                <i className="fa" aria-hidden="true" />
                {this.props.title}
              </button>
            </h5>
            <div>
              <button
                className="btn btn-outline-warning mr-3"
                onClick={this.edittingItem}
              >
                Sửa
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={this.deletingItem}
              >
                Xóa
              </button>
            </div>
          </div>
          <div
            id={"stt" + this.props.i}
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body"> {this.props.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEdit: () => {
      dispatch({ type: "EDIT_ITEM" });
    },
    getEditData: (editItem) => {
      dispatch({ type: "GET_EDIT_ITEM", editItem });
    },
    getDeleteData: (editItemID) => {
      dispatch({ type: "GET_DELETE_ITEM", editItemID });
    },
    onAlert: (alertContent,doing) => {
      dispatch({type:"ALERT_ON",alertContent,doing})
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);
