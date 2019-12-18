// filename: Higher-Order-Component-Simple.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const MyChild = props => <div>Hello</div>;
const MyHOC = props => {
  const myHocStyle = { color: "#c00", fontWeight: "bold", fontSize: "24px" };
  return <div style={myHocStyle}>{props.children}</div>;
};
class MyParent extends Component {
  render() {
    const myContainer = {
      maxWidth: "280px",
      margin: "10px auto",
      padding: "4px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <MyHOC>
          <MyChild />
        </MyHOC>
      </div>
    );
  }
}
ReactDOM.render(<MyParent />, document.getElementById("root"));
// const MyHOC = props => (<div>{props.children}</div>);// Works
// const MyHOC = props => <div>{props.children}</div>;// Works
// const MyHOC = props => props.children;// Works
// const MyHOC = props => { return props.children; };// Works
// const MyHOC = props => {props.children};// Error
// const MyHOC = props => ({props.children});// Error
//
// see: MLR >Web Related >ReactJS >JSX >Miscellaneous >Higher Order Component.rtf
