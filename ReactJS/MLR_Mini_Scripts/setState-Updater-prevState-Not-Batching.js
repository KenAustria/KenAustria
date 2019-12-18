// filename: setState-Updater-prevState-Not-Batching.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyStateComponent extends Component {
  state = { myNumber: 0 };
  myContainerStyle = {
    maxWidth: "360px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  componentDidMount() {
    this.myMethod();
  }
  myMethod = () => {
    this.setState((prevState, props) => {
      return { myNumber: prevState.myNumber + 1 };
    });
    this.setState((prevState, props) => {
      return { myNumber: prevState.myNumber + 1 };
    });
    this.setState((prevState, props) => {
      return { myNumber: prevState.myNumber + 1 };
    });
    this.setState((prevState, props) => {
      return { myNumber: prevState.myNumber + 1 };
    });
  };
  render() {
    return (
      <div style={this.myContainerStyle}>
        <div>
          Using setState()'s<br />
          updater function's prevState parameter<br />
          doesn't batch multiple setState()s<br />
          If it did batch,<br />
          the number below would be: 1<br />
          Each setState is applied separately.<hr />
          {this.state.myNumber}
          <hr />
          prevProps isn't used, because,<br />
          the props paremeter will not change.
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyStateComponent />, document.getElementById("root"));
