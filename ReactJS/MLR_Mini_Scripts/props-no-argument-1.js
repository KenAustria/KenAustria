// filename: props-no-argument-1.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = { myText: "" };
  clicked = MyParameter => this.setState({ myText: MyParameter });
  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <MyProp clicked={this.clicked} /> <span>{this.state.myText}</span>
      </div>
    );
  }
}
class MyProp extends Component {
  render() {
    return (
      <button onClick={() => this.props.clicked("Hello")}>Click me</button>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
