import React, { Component } from "react";
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux";

class Notifier extends Component {
  constructor(props) {
    super(props);
  }
 
  showDoing=()=>{
      if(this.props.doing==="add"){
          return "success"
      }else if(this.props.doing==="edit"){
          return "warning"
      }else{
          return "danger"
      }
  }
  render() {
    return (
      <AlertContainer>
        <Alert type={this.showDoing()} position="bottom-left" onDismiss={()=>this.props.offAlert()} timeout={3000}  >{this.props.alertContent}</Alert>
      </AlertContainer>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
    return {
        alertContent: state.alertContent,
        doing:state.doing
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        offAlert: () => {
            dispatch({type:"ALERT_OFF"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notifier)
