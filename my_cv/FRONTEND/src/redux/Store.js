var redux = require("redux");

const initialState = {
  isLoadding: true,
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADED":
      return { ...state, isLoadding: false };

    default:
      return state;
  }
};

var store = redux.createStore(reducer);

export default store;
