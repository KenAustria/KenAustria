// filename: props-inside-state.js
// to view, change this file's name to index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
class MyComponentTwo extends Component {
  state = { myStateTwoData: "TWO: " + this.props.myStateOneDataProps };
  render() {
    return <Fragment>{this.state.myStateTwoData}</Fragment>;
  }
}
class MyComponentOne extends Component {
  state = { myStateOneData: "State one" };
  render() {
    const myMainContainer = {
      maxWidth: "280px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myMainContainer}>
        <MyComponentTwo myStateOneDataProps={this.state.myStateOneData} />
      </div>
    );
  }
}
ReactDOM.render(<MyComponentOne />, document.getElementById("root"));
