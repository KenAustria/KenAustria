// filename: react16-assignment-2.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const CharComponent = props => {
  // this is the character that is inside each square.
  const myContainer = {
    display: "inline-block",
    margin: "8px 4px",
    padding: "8px",
    backgroundColor: "#ff9",
    border: "1px solid #000",
    borderRadius: "6px",
    textAlign: "center"
  };
  return (
    <div onClick={props.myDeleteItem} style={myContainer}>
      {props.myChar}
    </div>
  );
};
const ValidationComponent = props => {
  // this is the text under the length display.
  const myTextStyle = { fontWeight: "bold", color: "#900" };
  let myInptTxtLngth = props.myInputTextLength;
  let myReturnedText = "";
  switch (true) {
    case myInptTxtLngth === 0:
      myReturnedText = "Enter 3 characters";
      break;
    case myInptTxtLngth <= 2:
      myReturnedText = "Instructions: add more";
      break;
    case myInptTxtLngth >= 4:
      myReturnedText = "Instructions: too many";
      break;
    default:
      myReturnedText = "Instructions: perfect";
  }
  return <div style={myTextStyle}>{myReturnedText}</div>;
};
class App extends Component {
  state = {
    myId: "",
    myInputValue: "",
    myInputTextLength: 0,
    myCharComponentRender: true,
    myStateArrayChars: []
  };
  myInputChange = event => {
    let myInputValue = event.target.value;
    let myInputTextLength = myInputValue.length;
    const myLocalArrayCharsSplit = myInputValue.split(""); // turn the input letters into array items.
    this.setState({
      myInputValue,
      myInputTextLength,
      myStateArrayChars: myLocalArrayCharsSplit
    });
  };
  myDeleteItem = myItemIndex => {
    const myLocalArrayChars = [...this.state.myStateArrayChars]; // copy the characters array.
    myLocalArrayChars.splice(myItemIndex, 1); // remove the specified CharComponent character.
    let myFlattenedArray = myLocalArrayChars.join(""); // flatten the array to update the input value.
    let myLocalTextLength = myLocalArrayChars.length;
    this.setState({
      myInputValue: myFlattenedArray,
      myInputTextLength: myLocalTextLength,
      myStateArrayChars: myLocalArrayChars
    });
    this.myInputElement.focus();
  };
  componentDidMount() {
    this.myInputElement.focus();
  }
  render() {
    const myContainer = {
      maxWidth: "300px",
      minHeight: "120px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myInputStyle = {
      width: "80%",
      marginBottom: "10px",
      textAlign: "center",
      outline: "none"
    };
    let myDomChars = null;
    if (this.state.myCharComponentRender) {
      // myCharComponentRender is not used in this script.
      myDomChars = (
        <div>
          {this.state.myStateArrayChars.map((myMapChar, myIndex) => {
            return (
              <CharComponent
                key={myIndex}
                myChar={this.state.myStateArrayChars[myIndex]}
                myDeleteItem={() => this.myDeleteItem(myIndex)}
              />
            );
          })}
          {/* when an item is deleted, some of the remaining items receive a different myIndex #. */}
        </div>
      );
    }
    return (
      <div style={myContainer}>
        <input
          type="text"
          value={this.state.myInputValue}
          ref={myInput => (this.myInputElement = myInput)}
          onChange={this.myInputChange}
          style={myInputStyle}
        />
        <div>Text count: {this.state.myInputTextLength}</div>
        <ValidationComponent myInputTextLength={this.state.myInputTextLength} />
        {myDomChars}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
