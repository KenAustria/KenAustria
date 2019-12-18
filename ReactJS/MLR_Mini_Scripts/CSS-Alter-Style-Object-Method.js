// filename: CSS-Alter-Style-Object-Method.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const Person = props => {
  const myPersonStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  const messageStyle = { display: "inline-block", marginBottom: "8px" };
  //-------------------------------------------------------------------------------------------------
  return (
    <div style={myPersonStyle}>
      <div style={messageStyle}>
        Namr: {props.name}, Age: {props.age}
      </div>
    </div>
  );
};
//==================================================================================================
class App extends Component {
  state = {
    myShowPerson: false,
    myButtonColor: "#080",
    myPersonsArray: [
      { name: "Mosh", age: 20 },
      { name: "Josh", age: 25 },
      { name: "Kush", age: 30 }
    ]
  };
  //-------------------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "340px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  //-------------------------------------------------------------------------------------------------
  myShowPersonsMethod = () => {
    this.setState(prevState => {
      return {
        myButtonColor: prevState.myButtonColor === "#080" ? "#a00" : "#080",
        myShowPerson: !prevState.myShowPerson
      };
    });
  };
  //-------------------------------------------------------------------------------------------------
  render() {
    const myButtonStyle = {
      margin: "8px",
      padding: "8px",
      backgroundColor: `${this.state.myButtonColor}`,
      border: "1px solid #000",
      color: "#fff",
      cursor: "pointer",
      outline: "none"
    };
    let myPersonsDom = "";
    if (this.state.myShowPerson) {
      myPersonsDom = this.state.myPersonsArray.map(myCurrentPerson => {
        return (
          <Person
            key={myCurrentPerson.name + myCurrentPerson.age}
            name={myCurrentPerson.name}
            age={myCurrentPerson.age}
          />
        );
      });
    }
    return (
      <div style={this.myContainerStyle}>
        <button style={myButtonStyle} onClick={this.myShowPersonsMethod}>
          Toggle to Show Persons
        </button>
        {myPersonsDom}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// myButtonStyle.backgroundColor = '#a00'; works inside if statements,
// but, not inside functions.
