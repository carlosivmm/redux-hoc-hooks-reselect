import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as Actions from "./../store/actions";

export class CounterReduxHocExample extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.increment(1);
    }, 1000);
  }

  render() {
    return (
      <div className="flex flex-col">
        <div className="font-bold">REDUX HOC EXAMPLE</div>
        Counter: {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.redux_hoc.count
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment: Actions.increment_redux_hoc
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterReduxHocExample);

//export default ReduxHocExample;
