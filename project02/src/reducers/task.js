import * as types from "./../constants/ActionType";

var initialState = [];

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return state;
    default:
      return state;
  }
};

export default myReducer;
