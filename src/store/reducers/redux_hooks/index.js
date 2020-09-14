import { combineReducers } from "redux";

import count from "./count";
import todos from "./todos";

const createReducer = combineReducers({
  count,
  todos
});

export default createReducer;
