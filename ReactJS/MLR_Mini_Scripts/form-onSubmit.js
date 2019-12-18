// filename: form-onSubmit.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = { myName: "", mySubmitContent: "" };
  myInputText = event => {
    let myText = event.target.value;
    this.setState({ myName: myText });
  };
  myFormSubmit = event => {
    event.preventDefault();
    if (this.state.myName !== "") {
      this.setState({ mySubmitContent: this.state.myName });
    }
  };
  render() {
    const myMainContainer = {
      maxWidth: "360px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    const myInputStyle = {
      width: "90%",
      marginBottom: "8px",
      textAlign: "center"
    };
    const myButtonStyle = {
      minWidth: "110px",
      marginBottom: "6px",
      borderRadius: "8px"
    };
    return (
      <div style={myMainContainer}>
        <form method="post" onSubmit={this.myFormSubmit}>
          <input
            type="text"
            onChange={this.myInputText}
            value={this.state.myName}
            placeholder="Enter your name"
            style={myInputStyle}
          />
          <br />
          <button style={myButtonStyle}>Submit</button>
          <br />
        </form>
        <div>
          Typed content:{" "}
          {this.state.myName ? (
            <span>{this.state.myName}</span>
          ) : (
            <span>Waiting...</span>
          )}
        </div>
        <div>
          Submitted content:{" "}
          {this.state.myName ? (
            <span>{this.state.mySubmitContent}</span>
          ) : (
            <span>Waiting...</span>
          )}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
