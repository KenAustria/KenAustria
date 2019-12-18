// filename: event-target-bind-16.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { myInputValue: "My input" };
    this.myInputChange = this.myInputChange.bind(this);
  }
  myInputChange(e) {
    var itemValue = e.target.value;
    this.setState({ myInputValue: itemValue });
  }
  render() {
    const myContainer = {
      maxWidth: "340px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <h3>Forms in React</h3>
        <div>event, target.value, bind()</div>
        <br />
        <input
          value={this.state.myInputValue}
          onChange={this.myInputChange}
          style={{ marginBottom: 8 }}
        />
        <h4>{this.state.myInputValue}</h4>
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
