// filename: Template-Click.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponent = props => {
  return <div>Hi</div>;
};
class MyApp extends Component {
  state = { myValue: "Hello" };
  myMethod = () => this.setState({ myValue: "Good-bye" });
  myMainContainer = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  render() {
    return (
      <div style={this.myMainContainer}>
        <button onClick={() => this.myMethod}>Click</button>
        <div>{this.state.myValue}</div>
        <MyComponent myProps={this.state.myValue} />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
