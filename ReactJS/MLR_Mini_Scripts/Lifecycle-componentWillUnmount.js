// filename: Lifecycle-componentWillUnmount.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = { myText: "Component One" };
  }
  componentWillUnmount() {
    // this is the main point of this project.
    // "Component One" was unmounted and then replaced by "Component Two".
    alert(" componentWillUnmount invoked \n Component One was unmounted");
    // if relevant, clearInterval(), clearTimeout(), this.graph.destroy(), ...
  }
  render() {
    return (
      <div
        style={{
          marginBottom: "10px",
          padding: "6px",
          backgroundColor: "#ff4",
          borderBottom: "1px solid #000"
        }}
      >
        {this.state.myText}
      </div>
    );
  }
}
//======================================================================================
const MyComponent2 = () => (
  <div
    style={{
      marginBottom: "10px",
      padding: "6px",
      backgroundColor: "#afa",
      borderBottom: "1px solid #000"
    }}
  >
    Component Two
  </div>
);
//======================================================================================
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myCurrentComponent: true };
  }
  componentDidMount() {
    this.mySetTimeout = setTimeout(() => {
      // the "this" is necessary.
      this.setState({ myCurrentComponent: false });
    }, 1600);
  }
  componentWillUnmount() {
    // since this is the main component, this won't be unmounted.
    clearInterval(this.mySetTimeout);
  }
  render() {
    const myMainContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myMainContainer}>
        {this.state.myCurrentComponent ? <MyComponent1 /> : <MyComponent2 />}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
