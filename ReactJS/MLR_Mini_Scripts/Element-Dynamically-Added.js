// filename: Element-Dynamically-Added.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myValue: 1,
      myInputValue: "Hello"
    };
    this.myInputChange = this.myInputChange.bind(this);
  }
  myInitFunc() {
    return (
      <input
        value={this.state.myInputValue}
        onChange={this.myInputChange}
        style={{ marginBottom: 8 }}
      />
    );
  }
  myInputChange(e) {
    this.setState({ myInputValue: e.target.value });
  }
  render() {
    const myContainer = {
      maxWidth: "340px",
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
        {this.state.myValue === 1 ? this.myInitFunc() : null}
        <h4>{this.state.myInputValue}</h4>
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
