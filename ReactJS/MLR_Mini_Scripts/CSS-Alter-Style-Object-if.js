// filename: CSS-Alter-Style-Object-if.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = { myShowPersons: false };
  //-------------------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "200px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  //-------------------------------------------------------------------------------------------------
  myToggleInterface = () => {
    this.setState(prevState => ({ myShowPersons: !prevState.myShowPersons }));
  };
  //-------------------------------------------------------------------------------------------------
  render() {
    const myButtonStyle = {
      padding: "8px",
      backgroundColor: "#7d7",
      outline: "none",
      borderRadius: "10px",
      color: "#000",
      fontSize: "1.0rem"
    };
    let myPersonsContainer = null;
    if (this.state.myShowPersons) {
      myButtonStyle.backgroundColor = "#800";
      myButtonStyle.color = "#fff";
    }
    return (
      <div style={this.myContainerStyle}>
        <button onClick={this.myToggleInterface} style={myButtonStyle}>
          Toggle CSS style
        </button>
        {this.state.myShowPersons ? myPersonsContainer : null}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// myButtonStyle.backgroundColor = '#800'; works inside if statements,
// but, not inside functions.
