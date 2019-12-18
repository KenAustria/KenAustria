// filename: Property-Initial-render-Instance-props.js
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
  name = this.props.name;
  render() {
    return <div style={this.myMainContainer}>{this.name}</div>;
  }
}
ReactDOM.render(<MyParent name="George" />, document.getElementById("root"));
