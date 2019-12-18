// filename: setState-Updater-Function-Efficient.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyPersonComponent = props => {
  const myPersonStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  const myMessageStyle = { display: "inline-block", marginBottom: "8px" };
  const myInputStyle = { textAlign: "center" };
  //------------------------------------------------------------------------------------------------
  return (
    <div style={myPersonStyle}>
      <div onClick={props.myDeleteProps} style={myMessageStyle}>
        {props.myNameProps} {props.myAgeProps}: Click this text
      </div>
      <input
        type="text"
        value={props.myNameProps}
        onChange={props.myChangeTextProps}
        style={myInputStyle}
      />
    </div>
  );
};
//================================================================================================
class MyApp extends Component {
  state = {
    myPeopleArrayState: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Leslie", age: 29 },
      { id: "asdf11", name: "Stephany", age: 26 }
    ],
    myShowPeopleToggle: false
  };
  //------------------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "380px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ccc",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  myButtonStyle = {
    margin: "8px",
    padding: "8px",
    backgroundColor: "#fff",
    border: "1px solid #000",
    font: "inherit",
    cursor: "pointer",
    outline: "none"
  };
  //------------------------------------------------------------------------------------------------
  myChangePersonMethod = (myIdParameter, event) => {
    const myInputValueText = event.target.value;
    this.setState(prevState => {
      const myPeopleArrayMap = prevState.myPeopleArrayState.map(
        myCurrentPerson => {
          return myCurrentPerson.id === myIdParameter
            ? { ...myCurrentPerson, name: myInputValueText }
            : myCurrentPerson;
        }
      );
      return { myPeopleArrayState: myPeopleArrayMap };
    });
  };
  myDeletePersonMethod = myPersonIndex => {
    const myPeopleArrayClone = [...this.state.myPeopleArrayState];
    myPeopleArrayClone.splice(myPersonIndex, 1);
    this.setState({ myPeopleArrayState: myPeopleArrayClone });
  };
  myTogglePeopleMethod = () => {
    this.setState(prevState => {
      return { myShowPeopleToggle: !prevState.myShowPeopleToggle };
    });
  };
  //------------------------------------------------------------------------------------------------
  render() {
    let myPeopleDom = null;
    if (this.state.myShowPeopleToggle) {
      myPeopleDom = (
        <div>
          {this.state.myPeopleArrayState.map((myCurrentPerson, index) => {
            return (
              <MyPersonComponent
                key={myCurrentPerson.id}
                myNameProps={myCurrentPerson.name}
                myAgeProps={myCurrentPerson.age}
                myChangeTextProps={this.myChangePersonMethod.bind(
                  null,
                  myCurrentPerson.id
                )}
                myDeleteProps={this.myDeletePersonMethod.bind(null, index)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div style={this.myContainerStyle}>
        <button style={this.myButtonStyle} onClick={this.myTogglePeopleMethod}>
          Show People
        </button>
        {myPeopleDom}
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
