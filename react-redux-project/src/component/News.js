import React, { Component } from 'react';
import { connect } from 'react-redux';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    changeEditStatus=()=>{
        var {dispatch}=this.props;
        dispatch({type:"CHANGE"})
    }
    render() { 
        return ( 
            <div>
            <div>Đây là component News</div>
            <button className="btn btn-primary" onClick={this.changeEditStatus}>
                    Click Me
            </button>
            </div>
         );
    }
}
 const mapStateToProps = (state, ownProps) => {
     return {
         status: state.status
     }
 }
 export default connect(mapStateToProps)(News)