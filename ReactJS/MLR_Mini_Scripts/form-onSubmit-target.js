// filename: form-onSubmit-target.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = { myFirstName: "", myLastName: "", mySubmitContent: "" };
  //------------------------------------------------------------------------------------
  myMainContainer = {
    maxWidth: "360px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  myInputStyle = { width: "90%", marginBottom: "8px", textAlign: "center" };
  myButtonStyle = {
    minWidth: "110px",
    marginBottom: "6px",
    borderRadius: "8px"
  };
  //------------------------------------------------------------------------------------
  myInputText = event => {
    let myFormElementName = event.target.name;
    let myEnteredText = event.target.value;
    this.setState({ [myFormElementName]: myEnteredText });
  };
  myFormSubmit = event => {
    event.preventDefault();
    let myFullName = `${this.state.myFirstName} ${this.state.myLastName}`;
    if (this.state.myFirstName === "" && this.state.myLastName === "") {
      alert("Enter text in both text fields");
    }
    if (this.state.myFirstName !== "" && this.state.myLastName !== "") {
      this.setState({ mySubmitContent: myFullName });
    }
  };
  //------------------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myMainContainer}>
        <form method="post" onSubmit={this.myFormSubmit}>
          <input
            type="text"
            onChange={this.myInputText}
            value={this.state.myName}
            placeholder="First name"
            name="myFirstName"
            style={this.myInputStyle}
          />
          <br />
          <input
            type="text"
            onChange={this.myInputText}
            value={this.state.myName}
            placeholder="Last name"
            name="myLastName"
            style={this.myInputStyle}
          />
          <br />
          <input type="submit" value="Submit Form" style={this.myButtonStyle} />
          <br />
        </form>
        <div>
          First name:{" "}
          {this.state.myFirstName ? (
            <span>{this.state.myFirstName}</span>
          ) : (
            <span>Waiting...</span>
          )}
        </div>
        <div>
          Last name:{" "}
          {this.state.myLastName ? (
            <span>{this.state.myLastName}</span>
          ) : (
            <span>Waiting...</span>
          )}
        </div>
        <div>
          Submitted content:{" "}
          {this.state.mySubmitContent ? (
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
