// filename: Context-API-Global-state-Access.js
// this file must be named index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
const myCreateContext = React.createContext(false);
const MyComponent3 = () => (
  <myCreateContext.Consumer>
    {myContext => (
      <Fragment>Component 3: {myContext ? "True" : "False"}</Fragment>
    )}
  </myCreateContext.Consumer>
);
const MyComponent2 = () => <MyComponent3 />;
const MyComponent1 = () => <MyComponent2 />;
class MyApp extends Component {
  state = { myToggleVar: false };
  myContainerStyle = {
    maxWidth: "340px",
    margin: "10px auto",
    padding: "8px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myMethod = () =>
    this.setState(prevState => {
      return { myToggleVar: !prevState.myToggleVar };
    });
  render() {
    return (
      <div style={this.myContainerStyle}>
        <myCreateContext.Provider value={this.state.myToggleVar}>
          <MyComponent1 />
          <br />
        </myCreateContext.Provider>
        <button onClick={this.myMethod}>Click Me</button>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
