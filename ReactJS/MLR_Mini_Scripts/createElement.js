// filename: React.createElement.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return React.createElement(
      "div",
      { style: myContainer },
      React.createElement("h3", null, "Hello")
    );
  }
}
// React.createElement('div', {style:{color:'#900', fontSize:'16px'}} ...
ReactDOM.render(<App />, document.getElementById("root"));
