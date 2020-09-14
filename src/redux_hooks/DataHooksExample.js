import React from "react";

import { useSelector } from "react-redux";

import { createSelector } from "reselect";

const getTodosSelector = createSelector(
  (state, props) => state.todos[props.user],
  (state, props, filter) => filter,
  (todos, filter) => todos.filter(todo => todo.status === filter)
);

const DataHooksExample = React.memo(props => {
  const todos = useSelector(state =>
    getTodosSelector(state.redux_hooks, props, "done")
  );

  console.log("Render DataHooksExample");
  return <div>{JSON.stringify(todos)}</div>;
});

export default DataHooksExample;
