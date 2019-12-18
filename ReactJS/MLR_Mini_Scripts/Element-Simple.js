import React from "react";
import ReactDOM from "react-dom";
function myWelcome() {
  return <h2>Hello</h2>;
}
ReactDOM.render(
  React.createElement(myWelcome),
  document.getElementById("root")
); // if using "props" then use a "parameter". myWelcome(props) { ...
