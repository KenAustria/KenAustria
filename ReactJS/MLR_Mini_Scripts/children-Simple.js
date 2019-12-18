// filename: children-Simple.js
// to view, change this file's name to index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

const Child = props => {
  const myChildStyle = {
    margin: "10px 0",
    padding: "10px 0",
    backgroundColor: "#ff9",
    fontWeight: "bold"
  };
  const myChildrenStyle = {
    margin: "10px 0",
    padding: "10px 0",
    backgroundColor: "#9df",
    fontSize: "1rem",
    fontWeight: "lighter"
  };
  return (
    <Fragment>
      <main style={myChildStyle}>
        <div style={myChildrenStyle}>{props.children}</div>
        <div>The Child component</div>
        <div style={myChildrenStyle}>
          children allows this Child component<br />
          to have additional control inside its<br />
          Parent component.
        </div>
      </main>
    </Fragment>
  );
};
class Parent extends Component {
  state = { myText: "My greeting.", myEventType: "My event type." };
  render() {
    const myContainer = {
      maxWidth: "380px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "20px",
      fontFamily: "Helvetica",
      fontWeight: "bold"
    };
    return (
      <div style={myContainer}>
        <div>The Parent component</div>
        <Child>
          This displays above the Child's title,<br />
          because {"props.children"} is placed<br />
          above the Child's title.
        </Child>
      </div>
    );
  }
}
ReactDOM.render(<Parent />, document.getElementById("root"));
