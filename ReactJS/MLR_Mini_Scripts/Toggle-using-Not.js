// filename: Toggle-using-Not.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorited: false };
    //      this.displayFav = this.displayFav.bind(this);
    // Above: not needed because the onClick event is inside the displayFav() method, ...
    // the onClick event is not inside the render() >DOM element.
  }
  displayFav() {
    let myNumber = "";
    if (!this.state.favorited) {
      myNumber = "One ♡";
    } else {
      myNumber = "Two ♥︎";
    }
    return (
      <span
        onClick={() => this.setState({ favorited: !this.state.favorited })}
        style={{ display: "inline-block", color: "#a00" }}
      >
        {myNumber}
      </span>
    );
  }
  render() {
    const myContainer = {
      maxWidth: "300px",
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
        Click the number: <h2>{this.displayFav()}</h2>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
