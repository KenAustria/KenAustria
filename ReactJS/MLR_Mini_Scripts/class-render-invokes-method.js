// filename: class-render-invokes-method.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class MyStateComponent extends Component {
  state = { myGreetingAuthorization: true };
  myContainerStyle = {
    maxWidth: "200px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myGreetingMethod = () => <div>Hello</div>;
  render() {
    const myGreeting = this.myGreetingMethod();
    return (
      <div style={this.myContainerStyle}>
        {this.state.myGreetingAuthorization ? myGreeting : <div>Good-bye</div>}
      </div>
    );
  }
}
ReactDOM.render(<MyStateComponent />, document.getElementById("root"));
