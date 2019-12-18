// filename: Property-Initial-Method.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class Person extends Component {
  state = { id: 1, firstName: "", myLastName: "", myAge: 22, myDisplay: false };
  myMainContainer = {
    maxWidth: "300px",
    minHeight: "76px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  mySurname = "Davis";
  myMethod = () =>
    this.setState({
      myFirstName: "Douglass",
      myLastName: this.mySurname,
      myDisplay: true
    });
  render() {
    return (
      <div style={this.myMainContainer}>
        <button onClick={this.myMethod}>Click Me</button>
        {this.state.myDisplay && (
          <div>
            {this.state.myFirstName} {this.state.myLastName}
            : {this.state.myAge}
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<Person />, document.getElementById("root"));
