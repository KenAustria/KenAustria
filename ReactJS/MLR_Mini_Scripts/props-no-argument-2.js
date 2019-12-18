// filename: props-no-argument-2.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyInvokerComponent = props => (
  <button onClick={() => props.myMiddleClick("Hello")}>Click Me</button>
);

const MyMiddleComponent = props => (
  <MyInvokerComponent myMiddleClick={props.myMethodClick} />
);

class MyMethodComponent extends Component {
  state = { myGreet: "Waiting..." };
  myMethod = myArgument => this.setState({ myGreet: myArgument });
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
        <MyMiddleComponent myMethodClick={this.myMethod} />{" "}
        <span>{this.state.myGreet}</span>
      </div>
    );
  }
}
ReactDOM.render(<MyMethodComponent />, document.getElementById("root"));
// MyMiddleComponent only passes the button element, its onClick invocation event & "Hello".
// Note that props.myMethodClick and this.myMethod have no argument parenthesis, yet,
// it can still pass "Hello". this is a React feature (not JavaScript).
// myMiddleClick (only) can do the same with an eventproperties. meaning,  no () are used.
