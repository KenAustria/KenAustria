// filename: setState-Updater-Function-Tests.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { my1: 1, my2: 2, my3: 3, my4: 4 };
  componentWillMount() {
    this.setState(prevState => {
      const newState = Object.assign({}, prevState);
      return { my2: newState.my2 + 7 }; // better than overwriting the whole state.
      //                newState.my2 = prevState.my2 + 7;
      //                return newState;// 9
      //                return newState.my2;// 2, bad result.
    }); // Above: only use this technique for objects. not primitives.
    //        this.setState(prevState => ({my2:prevState.my2 + 7}));// 9. use for primitives.
  }
  render() {
    return <div>{this.state.my2}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
