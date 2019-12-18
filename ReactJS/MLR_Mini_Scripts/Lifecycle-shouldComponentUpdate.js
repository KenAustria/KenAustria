// filename: Lifecycle-shouldComponentUpdate.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = { myNumberState: 0 };
    this.myNumberMethod = this.myNumberMethod.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.myNumberState === 3) {
      // note: when nextState # is 3, the state # will remain as 2.
      return false;
    } else {
      return true;
    }
  }
  myNumberMethod() {
    if (this.state.myNumberState < 5) {
      this.setState({ myNumberState: this.state.myNumberState + 1 });
    } else {
      this.setState({ myNumberState: 0 });
    }
  }
  render() {
    const myContainer = {
      maxWidth: "420px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <div style={{ fontWeight: "bold" }}>
          ReactJS - Lifecycle - shouldComponentUpdate()
        </div>
        <hr />
        <div>
          <div style={{ paddingBottom: "6px", fontSize: ".9rem" }}>
            When nextState # is 3, the state # will remain as 2.
          </div>
          <button onClick={this.myNumberMethod}>Click</button>&#160;&#160;
          <span
            style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#a00" }}
          >
            {this.state.myNumberState}
          </span>
        </div>
        <hr />
        <div>
          <a
            href="project-files.zip"
            download="project-files.zip"
            style={{ color: "#555" }}
          >
            Download this app's project files
          </a>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
