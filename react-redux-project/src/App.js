import React, { Component } from "react";
import "./App.css";
import Note from "./component/body/Note";
import AddNew from "./component/body/AddNew";
import dataFirebase from "./redux/FireBase";
import { connect } from "react-redux";
import EditItem from "./component/body/EditItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getData = (item) => {
    dataFirebase.push(item);
  };

  showForm = () => {
    if (this.props.isEdit) {
      return <EditItem></EditItem>;
    }
    return <AddNew></AddNew>;
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10">
              <Note></Note>
            </div>
            <div className="col-2">{this.showForm()}</div>
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

export default connect(mapStateToProps)(App);
