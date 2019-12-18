// filename: Lifecycle-componentWillUpdate-Functional-setState.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class ColorComponent extends Component {
  backgroundColor = "#ff8"; // a default property value.
  componentWillUpdate(nextProps) {
    let myColor = this.backgroundColor === "#ff8" ? "#8fa" : "#ff8";
    this.backgroundColor = myColor;
  }
  render() {
    const myDivStyle = {
      marginTop: "6px",
      padding: "4px",
      backgroundColor: this.backgroundColor
    };
    return <div style={myDivStyle}>Hello there</div>;
  }
}
class App extends Component {
  state = { myNumber: 0 };
  incrementNumber = () => {
    // this causes componentWillUpdate() to invoke.
    this.setState(prevState => ({ myNumber: prevState.myNumber + 1 }));
  };
  render() {
    const myContainer = {
      maxWidth: "260px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ccc",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <button onClick={this.incrementNumber}>Click Me</button>
        <ColorComponent bgColor={"#8fa"} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
