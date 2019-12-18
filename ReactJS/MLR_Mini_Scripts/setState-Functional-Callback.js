// filename: setState-Functional-Callback.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { myCount: 0 };
  myCallbackFunction = myParam =>
    (this.myDivElement.innerHTML = "Done: " + myParam);
  myMethod = () => {
    this.setState(
      previousState => ({ myCount: previousState.myCount + 1 }),
      () => this.myCallbackFunction(this.state.myCount)
    );
  };
  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <div ref={myDiv => (this.myDivElement = myDiv)}>Waiting</div>
        <button onClick={this.myMethod}>Click</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
