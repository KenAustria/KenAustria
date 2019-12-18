// filename: bind-this-setState-state-14.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: "Welcome to React!",
      contentText: "We will go over the prop Validations"
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray1: ["Start "],
      myCount1: 0
    };
    this.myUpdateMyState = this.myUpdateMyState.bind(this);
    // bind() "myUpdateMyState()" to this "class" to access this "class"s contents.
    // even within the same class, the "constructor()" still requires the "bind()" Method.
  }
  myUpdateMyState() {
    // ES6: methods in a class does not use the prefixed keyword "function".
    var myCount2 = this.state.myCount1; // due to "bind()", "this" is the "this" for the "class".
    myCount2++;
    var myArrayItem = ", " + myCount2;
    var myArray2 = this.state.myArray1;
    myArray2.push(myArrayItem);
    this.setState({ myArray1: myArray2, myCount1: myCount2 });
  }
  render() {
    return (
      <div className="App-intro">
        <h3>Components API</h3>
        <div>bind(), this, setState(), state</div>
        <br />
        <button onClick={this.myUpdateMyState}>Click me</button>
        {/* onClick: camelCase must be used in JSX.
                    the state cannot be updated (setState()) within the render() method,
                        so (above) use myUpdateMyState().
                    originally, the "this" is the button element (see the bind() above) */}
        <h4>State myArray: {this.state.myArray1}</h4>
        {/* this immediately renders the current value of myArray1. */}
      </div>
    );
  }
}
export default App;
