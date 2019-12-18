// filename: Higher-Order-Component-Children.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyChild = props => <div>Hello</div>;

const MyHOC = props => {
  const myHocStyle = { color: "#c00", fontWeight: "bold", fontSize: "20px" };
  return (
    <div style={myHocStyle}>
      {props.children}
      {props.children.props.myGoodByeProps}
    </div>
  );
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
          <MyChild myGoodByeProps="Good-bye" />
        </MyHOC>
      </div>
    );
  }
}
ReactDOM.render(<MyParent />, document.getElementById("root"));
