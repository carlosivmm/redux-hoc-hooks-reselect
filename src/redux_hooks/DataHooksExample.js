import React from "react";

import { createSelector } from "reselect";

import { useSelector } from "react-redux";

const getTodosSelector = createSelector(
  (state, props) => state.todos[props.user],
  (state, props, filter) => filter,
  (todos, filter) => todos.filter(todo => todo.status === filter)
);

const DataHooksExample = props => {
  const todos = useSelector(state =>
    getTodosSelector(state.redux_hoc, props, "done")
  );

  console.log("Render DataHooksExample");
  return <div>{JSON.stringify(todos)}</div>;
};

export default DataHooksExample;
