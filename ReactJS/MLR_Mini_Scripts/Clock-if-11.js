// filename: Clock-if-11.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
let myMessage = ""; // setting a global variable.
class App extends Component {
  render() {
    const myContainer = {
      maxWidth: "400px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <p>The Clock stops when the count reaches zero.</p>
        <Clock />
      </div>
    );
  }
}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), myCount: 7 };
  }
  componentDidMount() {
    myMessage = "Countdown complete";
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000); // this.timeID =: the "this" is necessary.
  }
  tick() {
    this.setState({ date: new Date(), myCount: this.state.myCount - 1 });
    if (this.state.myCount < 1) {
      this.myDivElem.textContent = myMessage;
      clearInterval(this.timeID);
    }
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  } // this is not used in this script.
  render() {
    return (
      <div>
        <h2>The time is: {this.state.date.toLocaleTimeString()}</h2>
        <div>{this.state.myCount}</div>
        <div ref={myDiv => (this.myDivElem = myDiv)}>Countdown in progress</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
