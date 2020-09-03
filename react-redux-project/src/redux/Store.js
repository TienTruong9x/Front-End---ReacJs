import dataFirebase from "./FireBase";
// Redux
const redux = require("redux");

const nameInitialState = {
  isEdit: false,
  editItem: {},
  alertShow: false,
  alertContent: "",
  doing:''
};
const reducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      dataFirebase.push(action.newItem);
      return state;
    case "EDIT_ITEM":
      return { ...state, isEdit: !state.isEdit };
    case "GET_EDIT_ITEM":
      return { ...state, editItem: action.editItem };
    case "SAVE_EDIT_ITEM":
      dataFirebase.child(action.editItem.id).update({
        title: action.editItem.title,
        content: action.editItem.content,
      });
      return { ...state, editItem: {} };
    case "GET_DELETE_ITEM":
      dataFirebase.child(action.editItemID).remove();
      return state;
    case "ALERT_ON":
      return { ...state, alertShow: true, alertContent: action.alertContent,doing:action.doing};
    case "ALERT_OFF":
      return { ...state, alertShow: false };
    default:
      return state;
  }
};

const store = redux.createStore(reducer);

export default store;
