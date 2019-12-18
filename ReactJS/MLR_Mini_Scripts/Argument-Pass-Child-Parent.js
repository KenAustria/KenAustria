// filename: Argument-Pass-Child-Parent.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { childsName: "Original name.", myNewTextVar: "test" };
    this.myNameChangeFunc = this.myNameChangeFunc.bind(this);
  }
  myNameChangeFunc(newNameParam) {
    this.setState({ childsName: newNameParam });
  }
  render() {
    return (
      <div>
        <Content
          name={this.state.childsName}
          myNameChange={this.myNameChangeFunc}
        />
      </div>
    );
  }
}

class Content extends Component {
  componentWillMount() {
    // using a lifecycle method, allows the following code to pe placed here.
    this.myNewTextVar = this.props.name; // #1: Original name. without this: undefined.
    this.props.name === "Original name."
      ? this.props.myNameChange("Updated name.")
      : console.log("test");
    // without this, #2 renders: Original name.
  }
  render() {
    return (
      <div style={{ margin: 0, padding: 0, textAlign: "center" }}>
        <div>{"#1: " + this.myNewTextVar}</div>
        {/* Original name. */}
        <div>{"#2: " + this.props.name}</div>
        {/* Updated name. */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
