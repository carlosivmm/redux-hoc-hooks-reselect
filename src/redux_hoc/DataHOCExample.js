import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { createSelector } from "reselect";

const getTodosSelector = createSelector(
  (state, props) => state.todos[props.user],
  (state, props, filter) => filter,
  (todos, filter) => todos.filter(todo => todo.status === filter)
);

class DataHOCExample extends Component {
  render() {
    console.log("Render DataHOCExample");
    return <div>{JSON.stringify(this.props.todos)}</div>;
  }
}

const mapStateToProps = (state, props) => {
  // const todos = state.redux_hoc.todos[props.user].filter(
  //   todo => todo.status === "done"
  // );

  const todos = getTodosSelector(state.redux_hoc, props, "done");

  return { todos };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DataHOCExample);
