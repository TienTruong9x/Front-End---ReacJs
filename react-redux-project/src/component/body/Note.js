import React, { Component } from "react";
import "./Note.css";
// import { connect } from "react-redux";
import NoteItem from './NoteItem';
import dataFirebase from "./../../redux/FireBase";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datafb:[]
    };
  }

componentWillMount(){
  dataFirebase.on("value", (notes) => {
    let arrayNotes = [];
    notes.forEach((note) => {
      var key = note.key;
      var title = note.val().title;
      var content = note.val().content;
      arrayNotes.push({
        id: key,
        title,
        content,
      });
    });
   
   this.setState({
    datafb:arrayNotes
   });
  });
  
}
  getData=()=>{
    return this.state.datafb.map((note,key)=>{
      return <NoteItem key={key} i={key} title={note.title} content={note.content} oneNote={note}></NoteItem>
    })
  }

  render() {
    return (
      <div>
     {this.getData()}
     </div>
    );
  }
}

export default Note;
