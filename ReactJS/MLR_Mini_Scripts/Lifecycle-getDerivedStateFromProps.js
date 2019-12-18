// filename: Lifecycle-getDerivedStateFromProps.js
// this file must be named index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
class MyComponent extends Component {
  state = { myFixedNumber: 2, myDifferentNumber: "True" };
  //--------------------------------------------------------------------------
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps: ", nextProps, prevState);
    if (+nextProps.myRandomNumberProps === +prevState.myFixedNumber) {
      return { myDifferentNumber: "true" };
    } else {
      return { myDifferentNumber: "false" };
    }
  }
  //--------------------------------------------------------------------------
  render() {
    return (
      <Fragment>
        Random number: {this.props.myRandomNumberProps}
        <br />
        Fixed number: {this.state.myFixedNumber}
        <br />
        Numbers match: {this.state.myDifferentNumber}
      </Fragment>
    );
  }
}
class MyApp extends Component {
  state = { myRandomNumber: 0 };
  //--------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "320px",
    margin: "10px auto",
    padding: "8px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  //--------------------------------------------------------------------------
  myMethod = () => {
    const myNewRandomNumber = Math.floor(Math.random() * (4 - 1)) + 1;
    const myNewRandomWholeNumber = myNewRandomNumber.toFixed(0);
    if (myNewRandomNumber > 0.5) {
      this.setState({ myRandomNumber: myNewRandomWholeNumber });
    }
  };
  //--------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyComponent myRandomNumberProps={this.state.myRandomNumber} />
        <hr />
        <button onClick={this.myMethod}>Click Me</button>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
