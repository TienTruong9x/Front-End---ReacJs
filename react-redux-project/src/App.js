import React, { Component } from "react";
import "./App.css";
import Note from "./component/body/Note";
import AddNew from "./component/body/AddNew";
import dataFirebase from "./redux/FireBase";
import { connect } from "react-redux";
import EditItem from "./component/body/EditItem";
import Notifier from "./component/other/Notifier";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showForm = () => {
    if (this.props.isEdit) {
      return <EditItem></EditItem>;
    } else {
      return <AddNew></AddNew>;
    }
  };

  render() {
    return (
      <div>
        <div className="container">
            {this.props.alertShow?<Notifier></Notifier>:null}
          <div className="row">
            <div className="col-10">
              <Note></Note>
            </div>
            <div className="col-2">
            {this.showForm()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isEdit: state.isEdit,
    alertShow:state.alertShow
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
