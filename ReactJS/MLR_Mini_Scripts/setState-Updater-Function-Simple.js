// filename: setState-Updater-Function-Simple.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { myObject: { my1: 1, my2: 2, my3: 3, my4: 4 } };
  componentWillMount() {
    this.setState(prevState => {
      const myObjectClone = Object.assign({}, prevState.myObject);
      myObjectClone.my2 = prevState.myObject.my2 + 7;
      return { myObject: myObjectClone };
    });
  }
  render() {
    return <div>{this.state.myObject.my2}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
