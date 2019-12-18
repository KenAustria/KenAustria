// filename: event-stop-immediate-invoke-child.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyChild = props => {
  return (
    <button
      onClick={event =>
        props.myOnClick(event, "I'm from the MyChild component")
      }
    >
      Click Me
    </button>
  );
};
class App extends Component {
  state = { myText: "My original text.", myEvent: "waiting..." };
  myMethod = myParameter => (event, myParameter) =>
    this.setState({ myText: myParameter, myEvent: event.type });
  render() {
    const myContainer = {
      maxWidth: "380px",
      minHeight: "50px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "normal"
    };
    const myDivStyle = { marginBottom: "6px" };
    return (
      <div style={myContainer}>
        <div style={myDivStyle}>myText: {this.state.myText}</div>
        <div style={myDivStyle}>myEvent: {this.state.myEvent}</div>
        <MyChild myOnClick={this.myMethod()} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
