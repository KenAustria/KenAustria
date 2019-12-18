// filename: if-Statement-render-DOM-Content.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myRenderWho: 0 }; // change 0 to 1.
  }
  myDisplayWebpage() {
    if (this.state.myRenderWho > 0) {
      return (
        <div style={{ padding: "10px", backgroundColor: "#e0e" }}>
          <h3>Webpage One</h3>
        </div>
      );
    } else {
      return (
        <div style={{ padding: "10px", backgroundColor: "#0ca" }}>
          <h3>Webpage Two</h3>
        </div>
      );
    }
  }
  render() {
    const myContainer = {
      maxWidth: "420px",
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
        <h4>if Statement renders DOM Content</h4>
        {this.myDisplayWebpage()}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
