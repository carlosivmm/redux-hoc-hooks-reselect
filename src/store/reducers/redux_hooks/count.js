import * as Actions from "../../actions/index";

const initialState = 0;

const count = function (state = initialState, action) {
  switch (action.type) {
    case Actions.INCREMENT_REDUX_HOOKS:
      return state + action.payload;
    default:
      return state;
  }
};

export default count;
