// filename: form-Radio-Buttons.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Reservation extends Component {
  state = { mySelectedObject: { myId: 0, myName: "", myRadioStatus: false } };
  myPeopleArray = [
    { myId: 1, myName: "Jack", myRadioStatus: false },
    { myId: 2, myName: "Alison", myRadioStatus: false },
    { myId: 3, myName: "Mac", myRadioStatus: false },
    { myId: 4, myName: "Cindi", myRadioStatus: false }
  ];
  myContainerStyle = {
    maxWidth: "300px",
    margin: "6px auto 0",
    padding: "6px 0 0",
    backgroundColor: "#bbb",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myRadioStyle = {
    maxWidth: "90%",
    margin: "0 auto 6px",
    padding: "6px 0 0",
    backgroundColor: "#ff0",
    border: "1px solid #000",
    borderRadius: "10px"
  };
  myRadioMethod = RadioObject => {
    this.setState({
      mySelectedObject: {
        myId: RadioObject.myId,
        myName: RadioObject.myName,
        myRadioStatus: true
      }
    });
  }; // above: since a whole object is being immediately overwritten, mutation isn't occuring.
  render() {
    return (
      <div style={this.myContainerStyle}>
        {this.myPeopleArray.map(myCurrentObject => {
          return (
            <div
              key={myCurrentObject.myId + myCurrentObject.myName}
              style={this.myRadioStyle}
            >
              <label htmlFor="myRadioButton">
                <input
                  type="radio"
                  name="myRadioButton"
                  checked={this.state.myRadioStatus}
                  onChange={() => this.myRadioMethod(myCurrentObject)}
                  id="myRadioButton"
                />{" "}
                {myCurrentObject.myName}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
ReactDOM.render(<Reservation />, document.getElementById("root"));
// Note: fix the event bubbling.
