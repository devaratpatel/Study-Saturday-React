import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./components/Main";

const Hello = () => {
  return <h1>Hello React!</h1>;
};
ReactDOM.render(<Main />, document.getElementById("app"));

console.log("Hello Webpack!");
