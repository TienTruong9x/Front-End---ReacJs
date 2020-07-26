import React, { Component } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Result from "./components/Result";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      color:'red',
      fontSize:15
    }
  }
  onSetcolor(color){
    this.setState({color:color});
  }
  onChangeSize(value){
    if(this.state.fontSize + value <100 && this.state.fontSize+value>0 ){
      this.setState({fontSize:this.state.fontSize+value});
    }
    
  }
  onReset(){
    this.setState({
      color:'red',
      fontSize:16
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <ColorPicker color={this.state.color} onReciveColor={(param)=>{this.onSetcolor(param)}}/>
          </div>
          <div className="col-6"><SizeSetting fontSize={this.state.fontSize} onChangeSize={(value)=>{this.onChangeSize(value)}}/></div>
          <div className="col-12 mt-5"><Reset onResetSate={ ()=>this.onReset()}/></div>
          <div className="col-12 mt-5"><Result color={this.state.color} fontSize={this.state.fontSize}/></div>
        </div>
      </div>
    );
  }
}

export default App;
