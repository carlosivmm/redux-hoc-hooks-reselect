import React from "react";
import "./assets/main.css";

//REDUX HOC
import CounterReduxHocExample from "./redux_hoc/CounterReduxHocExample";
import DataHOCExample from "./redux_hoc/DataHOCExample";
import CounterReduxHooksExample from "./redux_hooks/CounterReduxHooksExample";
import DataHooksExample from "./redux_hooks/DataHooksExample";

function App() {
  return (
    <div className="flex p-16 flex-col">
      <CounterReduxHooksExample />
      <DataHooksExample user="carlos" />
      {/* <CounterReduxHocExample />
      <DataHOCExample user="carlos" /> */}
    </div>
  );
}

export default App;
