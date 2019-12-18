// filename: Initialize-Content-inside-constructor.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    const myObject = { aa: "a", bb: "b", cc: "c" };
    const ingredients = {};
    for (const [myKey, myValue] of Object.entries(myObject)) {
      ingredients[myKey] = myValue;
    } // this for...of will not work in an ES7 non-constructor.
    this.state = { ingredients: ingredients };
  }
  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return <div style={myContainer}>{this.state.ingredients.aa}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
