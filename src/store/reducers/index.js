import { combineReducers } from "redux";

import redux_hoc from "./redux_hoc";
import redux_hooks from "./redux_hooks";

const createReducer = asyncReducers =>
  combineReducers({
    redux_hoc,
    redux_hooks
  });

export default createReducer;
