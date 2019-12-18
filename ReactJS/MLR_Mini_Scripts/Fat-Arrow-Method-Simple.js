// filename: Fat-Arrow-Method-Simple.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myProperty: "Hello" };
    this.myMethod = this.myMethod.bind(this);
  }
  myMethod = z => this.setState({ myProperty: z });
  render() {
    const myContainer = {
      maxWidth: "260px",
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
        <button onClick={() => this.myMethod("Good-bye")}>Click me</button>
        &#160;{this.state.myProperty}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
