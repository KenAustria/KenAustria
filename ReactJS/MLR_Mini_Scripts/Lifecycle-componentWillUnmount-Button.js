// filename: Lifecycle-componentWillUnmount-Button.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  render() {
    return <div>The time is: {this.state.date.toLocaleTimeString()}</div>;
  }
}
class NoClock extends Component {
  render() {
    return <div>No clock</div>;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { clockStatus: true };
    this.removeClockComponent = this.removeClockComponent.bind(this);
  }
  removeClockComponent() {
    this.setState({ clockStatus: false });
  }
  render() {
    const myMainContainer = {
      maxWidth: "400px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "20px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myMainContainer}>
        {this.state.clockStatus ? <Clock /> : <NoClock />}
        <button onClick={this.removeClockComponent}>
          Remove the clock component
        </button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
