// filename: form-textArea-event-target-child-17.js
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
        <div>textarea, event, target.value, child</div>
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
    this.myHandleChange = this.myHandleChange.bind(this);
  }
  myHandleChange(e) {
    var itemValue = e.target.value;
    this.setState({ TaValue: itemValue });
  }
  render() {
    return (
      <div>
        <textArea value={this.state.TaValue} onChange={this.myHandleChange} />
        {/* onChange: camelCase must be used in JSX. */}
        <h4>{this.state.TaValue}</h4>
      </div>
    );
  }
}
export default App;
