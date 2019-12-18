// filename: setState-Mutation-Test.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class CloneApp extends Component {
  state = {
    myArray: [{ myPropertyFromOriginal: "Original property" }],
    myDisplay: false
  };
  myMethod = () => {
    const myArrayClone = [...this.state.myArray];
    myArrayClone[0].myPropertyFromOriginal = "New property";
    this.setState({ myArrayClone, myDisplay: true });
  };
  render() {
    const myMainContainer = {
      maxWidth: "260px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myMainContainer}>
        <button onClick={this.myMethod}>Click</button>
        <div>{this.state.myArray[0].myPropertyFromOriginal}</div>
        {this.state.myDisplay && (
          <div>{this.state.myArrayClone[0].myPropertyFromOriginal}</div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<CloneApp />, document.getElementById("root"));
