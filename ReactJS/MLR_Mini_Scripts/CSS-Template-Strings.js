// filename: CSS-Template-Strings.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";
import "./myStyle.css";

class App extends React.Component {
  state = { myContainerStyle: "#ddd", myBgdClr: "myBgdColor" };
  myContainerStyle = {
    maxWidth: "280px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: `${this.state.myContainerStyle}`,
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  render() {
    return (
      <div style={this.myContainerStyle}>
        Hello
        <div className={`${this.state.myBgdClr}`}>Div #2</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// myStyle.css .myBgdColor {padding:6px; background-color:#ff0;}
