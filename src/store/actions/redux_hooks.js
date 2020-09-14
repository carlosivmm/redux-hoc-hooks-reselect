export const INCREMENT_REDUX_HOOKS = "INCREMENT REDUX HOOKS";

export const increment_redux_hooks = n => dispatch =>
  dispatch({
    type: INCREMENT_REDUX_HOOKS,
    payload: n
  });
