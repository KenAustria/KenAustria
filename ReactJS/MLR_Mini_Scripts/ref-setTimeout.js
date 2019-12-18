// filename: ref-setTimeout().js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  componentDidMount() {
    this.myClearInterval = setTimeout(() => {
      this.myTextInput2.style.backgroundColor = "#ff7";
      this.myTextInput2.focus();
    }, 1400);
  }
  componentWillUnmount() {
    clearInterval(this.myClearInterval);
  }
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    const myInputStyle = {
      width: "220px",
      marginBottom: "6px",
      textAlign: "center"
    };
    return (
      <div style={myContainer}>
        <input
          type="text"
          placeholder="Text input 1"
          ref={myInput => (this.myTextInput1 = myInput)}
          style={myInputStyle}
        />
        <br />
        <input
          type="text"
          placeholder="Using ref and auto-focus"
          ref={input => (this.myTextInput2 = input)}
          style={myInputStyle}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
