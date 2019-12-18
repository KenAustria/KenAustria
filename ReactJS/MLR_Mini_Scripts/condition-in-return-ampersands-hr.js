// filename: condition-in-return-ampersands-hr.js
// this file must be named index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
class MyApp extends Component {
  state = {
    myPersonsArray: [
      { myId: "asfa1", myName: "Max", myAge: 28 },
      { myId: "vasdf1", myName: "Sophie", myAge: 19 },
      { myId: "asdf11", myName: "Stephanie", myAge: 32 }
    ]
  };
  myContainerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "8px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  render() {
    let myPersonsDom = null;
    myPersonsDom = this.state.myPersonsArray.map((myCurrentPerson, index) => (
      <Fragment key={myCurrentPerson.myId}>
        Name: {myCurrentPerson.myName}
        <br />
        Age: {myCurrentPerson.myAge}
        {index < this.state.myPersonsArray.length - 1 && <hr />}
      </Fragment>
    ));
    return <div style={this.myContainerStyle}>{myPersonsDom}</div>;
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
