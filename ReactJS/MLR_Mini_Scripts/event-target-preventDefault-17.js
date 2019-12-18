// filename: event-target-preventDefault-17.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React!"
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
  render() {
    return (
      <div className="App-intro">
        <h3>Forms in React</h3>
        <div>event, target.value, child, preventDefault()</div>
        <br />
        <EssayComponent />
      </div>
    );
  }
}
class EssayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { TaValue: "textArea text" };
    this.myTxtAreaChange = this.myTxtAreaChange.bind(this);
    this.myHandleSubmit = this.myHandleSubmit.bind(this);
  }
  myTxtAreaChange(e) {
    var itemValue = e.target.value;
    this.setState({ TaValue: itemValue });
  }
  myHandleSubmit(e) {
    alert(this.state.TaValue);
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.myHandleSubmit}>
        <textArea value={this.state.TaValue} onChange={this.myTxtAreaChange} />
        {/* onChange: camelCase must be used in JSX. */}
        <h4>{this.state.TaValue}</h4>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default App;
