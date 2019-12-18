// filename: setState-Updater-Function-Embedded-Object.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = {
    myOrderForm: {
      myName: "Phillip",
      myAddress: { myStreet: "My street", myCity: "My city" }
    }
  };
  //---------------------------------------------------------------------------
  myMainContainerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#eee",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myInpurStyle = { marginBottom: "4px", textAlign: "center" };
  //---------------------------------------------------------------------------
  myMethod = event => {
    const myAddress = { ...this.state.myOrderForm.myAddress };
    // myAddress must be the same spelling as inside the state.
    myAddress["myStreet"] = event.target.value;
    this.setState(prevState => {
      return { myOrderForm: { ...prevState.myOrderForm, myAddress } };
    });
  };
  //---------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myMainContainerStyle}>
        <input
          type="text"
          value={this.state.myOrderForm.myAddress.myStreet}
          onChange={this.myMethod}
          style={this.myInpurStyle}
        />
        <div>{this.state.myOrderForm.myName}</div>
        <div>{this.state.myOrderForm.myAddress.myStreet}</div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
