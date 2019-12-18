// filename: event-IIFE-child-bind().js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Person = props => {
  return (
    <div onClick={props.myClick("Andrew")}>
      {props.eventType === " waiting..." && <b>Click here: </b>}
      Name: {props.name}, Event type: {props.eventType}
    </div>
  );
};
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
      maxWidth: "400px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <Person
          name={this.state.name}
          eventType={this.state.eventType}
          myClick={this.switchNameHandler}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
