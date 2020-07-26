import React, { Component } from 'react';

class Result extends Component {
  
  setStyle(){
   return{
      color:this.props.color,
      borderColor:this.props.color,
      fontSize:this.props.fontSize
   } 
  }

  render(){
    return(
       <div className="col-12">
         <p>Color : {this.props.color} - Font-size : {this.props.fontSize} pixcel </p>
          <div id="content" className="p-2" style={this.setStyle()}>
            Nội dung thẻ div
          </div>
       </div>
    );
  }
}

export default Result;
