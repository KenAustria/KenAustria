// filename: event-IIFE-child-bind()-Simple.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { name: "Alice", eventType: " waiting..." };
  switchNameHandler = this.switchNameHandler.bind(this);
  switchNameHandler(myParameter) {
    return event => {
      this.setState({ name: myParameter, eventType: event.type });
    };
  }
  render() {
    const myContainer = {
      maxWidth: "420px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <div onClick={this.switchNameHandler("Andrew")}>
          {this.state.eventType === " waiting..." && <b>Click here: </b>}
          Name: {this.state.name}, Event type: {this.state.eventType}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
