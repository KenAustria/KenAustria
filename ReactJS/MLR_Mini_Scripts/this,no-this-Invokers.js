// filename: this,no-this-Invokers.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  myMethod() {
    return "Inside the method area";
  } // #1.
  render() {
    function myMethod() {
      return "Inside the render area";
    } // #2.
    const myContainer = {
      position: "relative",
      maxWidth: "280px",
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
        <div>
          this {"&"} no this invokers<hr />
          {this.myMethod()}
          <br />
          {myMethod()}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
