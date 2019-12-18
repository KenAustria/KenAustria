// filename: forceUpdate-bind-14.js
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
    super(props); // this "super(props)" is necessary.
    this.forceRandomUpdateNumber = this.forceRandomUpdateNumber.bind(this);
    // bind() "forceRandomUpdateNumber()" to this "class" to access this "class"s contents.
    // otherwise, the clicked button would represent the "this".
  }
  forceRandomUpdateNumber() {
    this.forceUpdate();
  } // forceUpdate(): a native method.
  // only this component will update (re-render).
  // it's better to use props & setState.
  render() {
    return (
      <div className="App-intro">
        <h3>Components API</h3>
        <div>forceUpdate(), bind()</div>
        <br />
        <button onClick={this.forceRandomUpdateNumber}>
          Press for a new random number
        </button>
        {/* onClick: camelCase must be used in JSX. */}
        <h4>State Data: {Math.random()}</h4>
      </div>
    );
  }
}
export default App;
