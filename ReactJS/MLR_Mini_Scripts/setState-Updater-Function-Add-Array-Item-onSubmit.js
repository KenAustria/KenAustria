// filename: setState-Updater-Function-Add-Array-Item-onSubmit.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = {
    myUsername: "",
    myPassword: "",
    myUserDetails: [],
    myMessage: "Waiting..."
  };
  //--------------------------------------------------------------------------
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
  //--------------------------------------------------------------------------
  myDisplayArrayMethod = () => {
    return this.state.myUserDetails.length === 0 ? (
      <div>Waiting...</div>
    ) : (
      this.state.myUserDetails.map((myCurrentItem, index) => (
        <div key={index + myCurrentItem.myPassword}>
          {myCurrentItem.myUsername}: {myCurrentItem.myPassword}
        </div>
      ))
    );
  };
  myOnFocusMethod = () => this.setState({ myMessage: "Waiting..." });
  myInputTextMethod = event => {
    let myText = event.target.value;
    event.target.name === "myUsername"
      ? this.setState({ myUsername: myText })
      : this.setState({ myPassword: myText });
  };
  myFormSubmitMethod = event => {
    event.preventDefault();
    const myUsernameCopy = this.state.myUsername;
    const myPasswordCopy = this.state.myPassword;
    if (this.state.myUsername !== "" && this.state.myPassword !== "") {
      this.setState(prevState => {
        const myUserDetailsCloneUpdated = [
          ...prevState.myUserDetails,
          { myUsername: myUsernameCopy, myPassword: myPasswordCopy }
        ];
        return {
          myUsername: "",
          myPassword: "",
          myUserDetails: myUserDetailsCloneUpdated,
          myMessage: "Thank-you"
        };
      });
    } else {
      this.setState({ myMessage: "Enter all data" });
    }
  };
  //--------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myMainContainer}>
        <form method="post" onSubmit={this.myFormSubmitMethod}>
          <input
            type="text"
            value={this.state.myUsername}
            name="myUsername"
            placeholder="Enter your name"
            onFocus={this.myOnFocusMethod}
            onChange={this.myInputTextMethod}
            style={this.myInputStyle}
          />
          <br />
          <input
            type="text"
            value={this.state.myPassword}
            name="myPassword"
            placeholder="Enter your password"
            onFocus={this.myOnFocusMethod}
            onChange={this.myInputTextMethod}
            style={this.myInputStyle}
          />
          <br />
          <button style={this.myButtonStyle}>Submit</button>
        </form>
        <hr />
        <div>{this.state.myMessage}</div>
        <hr />
        <div>{this.myDisplayArrayMethod()}</div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
