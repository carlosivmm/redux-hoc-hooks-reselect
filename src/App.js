import React from "react";
import "./assets/main.css";

import { default as ExampleReduxHoc } from "./redux_hoc/Counter";

function App() {
  console.log("render");
  return (
    <div className="flex p-16 flex-col">
      <div className="font-black">REDUX HOC</div>
    </div>
  );
}

export default App;
