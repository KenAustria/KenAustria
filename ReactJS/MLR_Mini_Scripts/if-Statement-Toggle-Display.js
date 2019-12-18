// filename: if-Statement-Toggle-Display.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { myStateBoolean: true };
  myToggleBoolean = () => {
    const myLocalBoolean = this.state.myStateBoolean;
    this.setState({ myStateBoolean: !myLocalBoolean });
  };
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
    let myText = null;
    if (this.state.myStateBoolean) {
      myText = <div>Hello</div>;
    }
    return (
      <div style={myContainer}>
        <button onClick={this.myToggleBoolean} style={myButtonStyle}>
          Toggle the text display
        </button>
        {myText}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
