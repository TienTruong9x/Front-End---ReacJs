let redux = require("redux");
let oldState = {
  num: ["anhyeyem", 123, "ahiih"],
  status: true,
};
let reducer = (state = oldState, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, status: !state.status };
    case "DELETE":
      return {
        ...state,
        num: state.num.filter((item, i) => i !== action.index),
      };
    default:
      return state;
  }
};

let store = redux.createStore(reducer);
store.subscribe(()=>{
  console.log(store.getState());
});
export default store;
