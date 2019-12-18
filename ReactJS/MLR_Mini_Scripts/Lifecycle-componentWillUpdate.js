// filename: Lifecycle-componentWillUpdate.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = { myNumberState: 1 };
    this.myNumberMethod = this.myNumberMethod.bind(this);
  }
  myNumberMethod() {
    if (this.state.myNumberState < 4) {
      this.setState({ myNumberState: this.state.myNumberState + 1 });
    } else {
      this.setState({ myNumberState: 0 });
    }
  }
  componentWillUpdate(nextProps, nextState) {
    // no direct props access, so nextProps will not work in this component.
    if (nextState.myNumberState === 11) {
      // This is an example of what you can do.
      console.log("Example only.");
    } else {
      this.refs.mySpan1.innerHTML = nextState.myNumberState;
      this.refs.mySpan2.innerHTML = this.state.myNumberState;
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
          ReactJS - Lifecycle - componentWillUpdate()
        </div>
        <hr />
        <div>
          <span style={{ fontSize: ".8rem", fontWeight: "lighter" }}>
            nextState:{" "}
          </span>
          <span
            ref="mySpan1"
            style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#a00" }}
          >
            -
          </span>
          &#160;&#160;&#160;&#160;
          <span style={{ fontSize: ".8rem", fontWeight: "lighter" }}>
            state:{" "}
          </span>
          <span
            ref="mySpan2"
            style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#0aa" }}
          >
            -
          </span>
          <MyChildComponent myNumberProp={this.state.myNumberState} />
          <button onClick={this.myNumberMethod}>Click to compare</button>
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
class MyChildComponent extends Component {
  componentWillUpdate(nextProps, nextState) {
    // no direct state accesss, so nextState will not work in this component.
    if (nextProps.myNumberProp === 11) {
      // This is an example of what you can do.
      console.log("Example only.");
    } else {
      this.refs.mySpan3.innerHTML = nextProps.myNumberProp;
      this.refs.mySpan4.innerHTML = this.props.myNumberProp;
    }
  }
  render() {
    return (
      <div style={{ paddingBottom: "6px" }}>
        <span style={{ fontSize: ".8rem", fontWeight: "lighter" }}>
          nextProps:{" "}
        </span>
        <span
          ref="mySpan3"
          style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#a00" }}
        >
          -
        </span>
        &#160;&#160;&#160;&#160;
        <span style={{ fontSize: ".8rem", fontWeight: "lighter" }}>
          state:{" "}
        </span>
        <span
          ref="mySpan4"
          style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#0aa" }}
        >
          -
        </span>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
