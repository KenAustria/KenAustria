// filename: Render-Test.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Person = props => {
  console.log("Child rendered");
  const personStyle = {
    maxWidth: "90%",
    margin: "0 auto 6px",
    padding: "4px 0 4px",
    backgroundColor: "#ddd",
    border: "1px solid #fff",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  return (
    <div style={personStyle}>
      <div>
        {props.myNameProps} {props.myAgeProps}
      </div>
    </div>
  );
};
class MyApp extends Component {
  state = {
    myPersons: [
      { myId: "asfa1", myName: "Max", myAge: 28 },
      { myId: "vasdf1", myName: "Alyson", myAge: 29 },
      { myId: "asdf11", myName: "Stephanie", myAge: 26 }
    ]
  };
  //--------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "300px",
    margin: "10px auto 0",
    padding: "10px 0 4px",
    backgroundColor: "#8be",
    textAlign: "center",
    border: "1px solid #000"
  };
  myInputStyle = { marginBottom: "8px" };
  //--------------------------------------------------------------------------------
  myMethod = (myText, event) => {
    const myPersonsClone = [...this.state.myPersons];
    const myPerson2Clone = { ...this.state.myPersons[2] };
    //        myPerson2Clone.myName = event.target.value;// swap with the below code.
    myPerson2Clone.myName = myText;
    myPersonsClone[2] = myPerson2Clone;
    this.setState({ myPersons: myPersonsClone });
  };
  //--------------------------------------------------------------------------------
  render() {
    const personsDom = (
      <div>
        {this.state.myPersons.map((myPerson, index) => {
          return (
            <Person
              key={myPerson.myId}
              myNameProps={myPerson.myName}
              myAgeProps={myPerson.myAge}
            />
          );
        })}
      </div>
    );
    return (
      <div style={this.myContainerStyle}>
        <input
          value={this.state.myPersons[2].myName}
          onChange={e => this.myMethod("Test", e)}
          style={this.myInputStyle}
        />
        {personsDom}
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
