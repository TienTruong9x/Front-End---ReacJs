import React, { Component } from 'react';
class ColorPicker extends Component {
  constructor(props){
    super(props);
    this.state={
      colors:['red','blue','green','#AAA','yellow','#ff00ff','#33ff33','#5511ff']
    };
  }

  showColor(color){
    return {
      backgroundColor:color
    }
    
  }  
  setActiveColor(color){
    this.props.onReciveColor(color);
  }

  render(){
    var color=this.state.colors.map((color,i)=>{
      return <span 
      key={i} 
      style={ this.showColor(color)} 
      className={this.props.color===color?'active':''}
      onClick={()=>{this.setActiveColor(color)}}
      ></span>
    });
    return(
        <div className="card">
            <div className="card-header bg-primary text-white">
                ColorPicker
            </div>
            <div className="card-body">
               {color}
            </div>
        </div>
    );
  }
}

export default ColorPicker;
