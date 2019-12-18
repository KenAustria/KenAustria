// filename: Create-New-state-Property.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

class MyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({ myNewStateProperty: "Hello" });
  }
  render() {
    const myMainContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "20px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return <div style={myMainContainer}>{this.state.myNewStateProperty}</div>;
  }
}
// if a state property does not preexist,
// setState() will create its new property, inside the state.
ReactDOM.render(<MyContainer />, document.getElementById("root"));
