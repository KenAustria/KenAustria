// filename: HOC-simple.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponent = () => "My component";
const WithClass = props => props.children;

class App extends Component {
  render() {
    return (
      <WithClass>
        <MyComponent />
      </WithClass>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
