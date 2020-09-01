import dataFirebase from "./FireBase";
// Redux
const redux = require("redux");

const nameInitialState = {
  isEdit:false,
  editItem:{}
};
const reducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      dataFirebase.push(action.newItem);
      break;
    case "EDIT_ITEM":
      return {...state,isEdit:!state.isEdit}
    case "GET_EDIT_ITEM":
      return {...state,editItem:action.editItem}
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

export default store;
