// filename: Component-Props.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyChildComponent = props => {
  return (
    <div>
      <div>{props.myPropAppProperty}</div>
    </div>
  );
};
class App extends Component {
  state = { myStateProperty: "" };
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#9cf",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "normal"
    };
    return (
      <div style={myContainer}>
        <MyChildComponent
          myPropAppProperty={this.props.myTopLevelAppProperty}
        />
      </div>
    );
  }
}
ReactDOM.render(
  <App myTopLevelAppProperty={"From the top"} />,
  document.getElementById("root")
);
