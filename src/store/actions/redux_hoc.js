export const INCREMENT_REDUX_HOC = "INCREMENT REDUX HOC";

export const increment_redux_hoc = n => dispatch =>
  dispatch({
    type: INCREMENT_REDUX_HOC,
    payload: n
  });
