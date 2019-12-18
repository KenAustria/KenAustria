// filename: Property-Initial-render.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";
class MyParent extends React.Component {
  myMainContainer = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  myName = "George";
  render() {
    if (this.myName === "George") {
      this.myName = "Not George";
    }
    return <div style={this.myMainContainer}>{this.myName}</div>;
  }
}
ReactDOM.render(<MyParent />, document.getElementById("root"));
