// filename: CSS-Styles-via-state-map.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
//===========================================================================
const MyColorComponent = props => {
  const myColorStyle = {
    padding: "6px",
    backgroundColor: props.myBgdColor,
    color: props.myFontColor
  };
  return <div style={myColorStyle}>id: {props.myId}</div>;
};
//===========================================================================
class App extends Component {
  state = {
    myColors: [
      { id: "AAA", bgdColor: "#ff0", fontColor: "#036" },
      { id: "BBB", bgdColor: "#770", fontColor: "#ff7" },
      { id: "CCC", bgdColor: "#444", fontColor: "#eee" }
    ]
  };
  //---------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "normal"
  };
  //---------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        {this.state.myColors.map(myItem => (
          <MyColorComponent
            key={myItem.id}
            myId={myItem.id}
            myBgdColor={myItem.bgdColor}
            myFontColor={myItem.fontColor}
          />
        ))}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
