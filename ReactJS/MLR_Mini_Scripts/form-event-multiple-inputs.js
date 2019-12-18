// filename: form-event-multiple-inputs.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const MyComponent = props => {
  const mySubmitContent = {
    maxWidth: "90%",
    margin: "0 auto",
    padding: "10px 0",
    backgroundColor: "#eee",
    border: "1px solid #000",
    borderRadius: "8px"
  };
  return (
    <div>
      <div>
        {props.myPropsName !== "" ? props.myPropsName : "Name: Waiting..."}
      </div>
      <div>
        {props.myPropsAge !== "" ? props.myPropsAge : "Age: Waiting..."}
      </div>
      <div style={mySubmitContent}>
        {props.myPropsSubmitContent !== ""
          ? props.myPropsSubmitContent
          : "Submission: Waiting..."}
      </div>
    </div>
  );
};
class App extends Component {
  state = {
    myName: "",
    myAge: "",
    mySubmitContent: ""
  };
  myMainContainer = {
    width: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ccc",
    textAlign: "center",
    border: "1px solid #000"
  };
  myInputStyle = { width: "90%", marginBottom: "8px", textAlign: "center" };
  myButtonStyle = {
    minWidth: "110px",
    marginBottom: "6px",
    borderRadius: "8px"
  };
  myInputText = event => {
    if (event.target.id === "name-input") {
      this.setState({ myName: event.target.value });
    }
    if (event.target.id === "age-input") {
      this.setState({ myAge: event.target.value });
    }
  };
  myFormSubmit = event => {
    event.preventDefault();
    if (this.state.myName !== "" && this.state.myAge !== "") {
      this.setState({
        mySubmitContent: this.state.myName + " " + this.state.myAge
      });
    }
    return false;
  };
  render() {
    return (
      <div style={this.myMainContainer}>
        <form method="post" onSubmit={this.myFormSubmit}>
          <input
            type="text"
            onChange={this.myInputText}
            value={this.state.myName}
            placeholder="Enter your name"
            id="name-input"
            style={this.myInputStyle}
          />
          <br />
          <input
            type="text"
            onChange={this.myInputText}
            value={this.state.myAge}
            placeholder="Enter your age"
            id="age-input"
            style={this.myInputStyle}
          />
          <br />
          <button style={this.myButtonStyle}>Submit</button>
          <br />
        </form>
        <hr />
        <MyComponent
          myPropsName={this.state.myName}
          myPropsAge={this.state.myAge}
          myPropsSubmitContent={this.state.mySubmitContent}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
