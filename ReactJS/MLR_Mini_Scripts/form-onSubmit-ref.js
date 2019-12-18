// filename: form-onSubmit-ref.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const myAlertStyle = {
  maxWidth: "60%",
  minHeight: "60px",
  margin: "0 auto",
  padding: "10px",
  backgroundColor: "#bef",
  border: "1px solid #000"
};
const MyAlert = props => (
  <div>
    <hr />
    <div style={myAlertStyle}>
      <div>{props.myProps.myStateName}</div>
      <div>{props.myProps.myStateEmail}</div>
      <div>{props.myProps.myStateAge}</div>
    </div>
  </div>
);
class MyForm extends Component {
  state = { myStateName: "", myStateEmail: "", myStateAge: "" };
  myMainContainer = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ff9",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  myInput = { minWidth: "70%", display: "block", margin: "4px auto" };
  mySubmit = e => {
    e.preventDefault();
    this.setState({
      myStateName: this.myName.value,
      myStateEmail: this.myEmail.value,
      myStateAge: this.myAge.value
    });
  };
  render() {
    return (
      <div style={this.myMainContainer}>
        <form onSubmit={this.mySubmit}>
          <input
            type="text"
            placeholder="Name"
            ref={myInput => {
              this.myName = myInput;
            }}
            style={this.myInput}
          />
          <input
            type="text"
            placeholder="Email"
            ref={myInput => {
              this.myEmail = myInput;
            }}
            style={this.myInput}
          />
          <input
            type="text"
            placeholder="Age"
            ref={myInput => {
              this.myAge = myInput;
            }}
            style={this.myInput}
          />
          <input type="submit" value="Submit" />
        </form>
        <div>
          <MyAlert myProps={this.state} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById("root"));
