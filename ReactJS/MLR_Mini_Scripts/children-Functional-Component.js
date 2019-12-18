// filename: children-Functional-Component.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const MyMain = props => (
  <div>
    {props.myGlobalProps}
    {props.children}
  </div>
);
class MyApp extends Component {
  render() {
    const myContainer = {
      maxWidth: "260px",
      margin: "10px auto",
      padding: "4px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    const myChildrenStyle = { fontWeight: "bold", color: "#a00" };
    return (
      <div style={myContainer}>
        <MyMain myGlobalProps={this.props.myGlobalProps}>
          <div style={myChildrenStyle}>I am Children text.</div>
        </MyMain>
      </div>
    );
  }
}
ReactDOM.render(
  <MyApp myGlobalProps={"Global content"} />,
  document.getElementById("root")
);
