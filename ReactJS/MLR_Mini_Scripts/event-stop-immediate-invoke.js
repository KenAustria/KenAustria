// filename: event-stop-immediate-invoke.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { myText: "My original text.", myEvent: "waiting..." };
  myMethod = myParameter => event =>
    this.setState({ myText: myParameter, myEvent: event.type });
  render() {
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
    const myDivStyle = { marginBottom: "6px" };
    return (
      <div style={myContainer}>
        <div style={myDivStyle}>myText: {this.state.myText}</div>
        <div style={myDivStyle}>myEvent: {this.state.myEvent}</div>
        <button onClick={this.myMethod("My new text.")}>Click Me</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
