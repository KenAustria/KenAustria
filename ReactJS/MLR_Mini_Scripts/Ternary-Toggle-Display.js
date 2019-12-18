// filename: Ternary-Toggle-Display.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { myBoolean: true };
  myToggleBoolean = () => this.setState({ myBoolean: !this.state.myBoolean });
  render() {
    const myContainer = {
      maxWidth: "200px",
      minHeight: "50px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myButtonStyle = { marginBottom: "8px" };
    return (
      <div style={myContainer}>
        <button onClick={this.myToggleBoolean} style={myButtonStyle}>
          Toggle the text display
        </button>
        {this.state.myBoolean ? <div>Hello</div> : null}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
