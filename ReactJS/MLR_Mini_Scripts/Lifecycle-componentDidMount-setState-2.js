// filename: Lifecycle-componentDidMount-setState-2.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { myName: "Anne" };
  myMethod = () => {
    this.myClearInterval = setTimeout(() => {
      this.setState({ myName: "Jane" });
    }, 1500);
  };
  componentDidMount() {
    this.myMethod();
  }
  componentWillUnmount() {
    clearInterval(this.myClearInterval);
  }
  render() {
    const myJsxContent = <div>{this.state.myName}</div>;
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return <div style={myContainer}>{myJsxContent}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
