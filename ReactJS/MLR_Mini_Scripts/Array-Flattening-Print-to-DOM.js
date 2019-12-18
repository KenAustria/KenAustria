// filename: Array-Flattening-Print-to-DOM.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponent = props => {
  console.log(props.myArrayProps);
  const myAdd = [[4] + [5]];
  return (
    <div>
      {props.myArrayProps}
      <br />
      {myAdd}
    </div>
  );
};
class MyApp extends Component {
  myContainerStyle = {
    maxWidth: "200px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myArray = [[1, 2], [3, 4], [5, 6]];
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyComponent myArrayProps={this.myArray} />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
