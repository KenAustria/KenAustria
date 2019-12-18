// filename: setState-Mutation-Proof.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  state = { myPrimitives: ["a", "b", "c"] }; // a non-embedded array of primitives.
  myMethod() {
    const myPrimitivesNotCloned = this.state.myPrimitives;
    //                        [...this.state.myPrimitives] (cloning) should be used.
    myPrimitivesNotCloned[0] = "Mutated"; // The state has (now) been mutated.
    console.log("componentDidMount: ", this.state.myPrimitives[0]);
    //        this.setState({myPrimitives:myPrimitivesNotCloned});
  }
  render() {
    this.myMethod();
    console.log("Render: ", this.state.myPrimitives[0]); // Mutated
    // Above: The state has been mutated.
    // setState() has not been applied (yet).
    // The console shows that state.myPrimitives (array) has been altered.
    const myContainer = {
      maxWidth: "280px",
      margin: "10px auto",
      padding: "4px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        See the console.<br />
        state.myPrimitives[0]: {this.state.myPrimitives[0]}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
