import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../store/actions";

const CounterReduxHooksExample = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.redux_hooks.count);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(Actions.increment_redux_hooks(1));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [dispatch]);

  return (
    <div className="flex flex-col">
      <div className="font-bold">REDUX HOOKS EXAMPLE</div>
      Counter: {count}
    </div>
  );
};

export default CounterReduxHooksExample;
