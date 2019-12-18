// filename: DOM-Element-Names-Warning.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyInput = props => {
  let myInputElement = null;
  switch (props.myInputType) {
    case "input":
      myInputElement = (
        <input
          myInputType="input"
          type="text"
          value="Hello"
          onChange={props.myChangeMethod}
        />
      );
      break;
    default:
      console.log("Error inside the switch");
  }
  return <div>{myInputElement}</div>;
};
class MyApp extends Component {
  myContainer = {
    maxWidth: "380px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myChangeMethod = () => alert("Changed");
  render() {
    return (
      <div style={this.myContainer}>
        <MyInput myInputType="input" myChangeMethod={this.myChangeMethod} />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
// no uppercase characters for DOM element names.
// code line 9 causing a warning.
// code 9 line is not needed for this script.
// if code line 9 is removed, the warning goes away.
// or, changing every occurrence of myInputType to lowercase, the warning goes away.
