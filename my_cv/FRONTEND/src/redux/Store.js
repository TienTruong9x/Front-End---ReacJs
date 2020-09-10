var redux = require("redux");

const initialState = {
  isLoadding: true,
  isMobile:false
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADED":
      return { ...state, isLoadding: false };
    case "RESIZE":
      if(action.w<992){
        return {...state,isMobile:true}
      }else{
        return {...state,isMobile:false}
      }
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

export default store;
