// filename: hidden-Attribute.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  state = { myHidden: "false" };
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
  //---------------------------------------------------------------------------
  myHiddenMethod = () =>
    this.setState(prevState => {
      return { myHidden: !prevState.myHidden };
    });
  //---------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myMainContainerStyle}>
        <button onClick={this.myHiddenMethod}>Click to hide/show</button>
        <div hidden={this.state.myHidden}>Hello</div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
// "The hidden attribute must not be used to hide content that could
// legitimately be shown in another presentation. ...".
// https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden
