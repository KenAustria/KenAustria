// filename: children-condition.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Person = props => {
  const personStyle = {
    maxWidth: "80%",
    margin: "8px auto",
    padding: "6px 0",
    backgroundColor: "#9cf",
    border: "1px solid #000",
    borderRadius: "10px"
  };
  return (
    <div>
      {props.children && <div style={personStyle}>{props.children}</div>}
    </div>
  );
}; // alternative: props.children ? <div>{props.children}</div> : null
const App = () => {
  const myContainer = {
    maxWidth: "300px",
    minHeight: "50px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ff9",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "normal"
  };
  return (
    <div style={myContainer}>
      <div>Render, only if children exist.</div>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29">
        My children.
      </Person>
      <Person name="Stephanie" age="26" />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
