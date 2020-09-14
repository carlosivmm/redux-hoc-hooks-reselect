export const INCREMENT_REDUX_HOC = "INCREMENT REDUX HOC";
export const GET_TODOS_REDUX_HOC = "GET_TODOS_REDUX_HOC";

export const increment_redux_hoc = n => dispatch =>
  dispatch({
    type: INCREMENT_REDUX_HOC,
    payload: n
  });

export const getTodos = user => dispatch =>
  dispatch({ type: GET_TODOS_REDUX_HOC, payload: user });
