// filename: form-checkbox-events-onChange-18.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Reservation extends Component {
  state = { isGoing: true, numberOfGuests: 2 }; // true; must be a boolean (not "True").
  myContainer = {
    maxWidth: "400px",
    margin: "10px auto",
    padding: "0 0 10px",
    backgroundColor: "#ccc",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  handleInputChange = e => {
    const myWarnStyle = "color:#900; font-weight:bold;"; // this is for a template string, not JSX.
    const mySuccessStyle = "color:#080; font-weight:bold;"; // this is for a template string, not JSX.
    const myTarget = e.target;
    if (myTarget.type === "number") {
      if (myTarget.value < 0) {
        // below: note the backticks. template string substitution.
        this.myDivElement.innerHTML = `<span style="${myWarnStyle}">The number must be above zero<span>`;
      } else if (myTarget.value > 5) {
        this.myDivElement.innerHTML = `<span style="${myWarnStyle}">The number must be less than 5<span>`;
      } else {
        this.myDivElement.innerHTML = `<span style="${mySuccessStyle}">Please continue :)<span>`;
      }
    }
    const myValue =
      myTarget.type === "checkbox" ? myTarget.checked : myTarget.value;
    // myTarget.checked: is true or false. // myTarget.value: is a number.
    const myName = myTarget.name;
    this.setState({ [myName]: myValue });
    // [myName]: is a Dynamic Object Property Name via Computed Member Access.
    // [myName]: will be "isGoing" or "numberOfGuests".
  };
  myHandleSubmit = e => {
    e.preventDefault();
    this.myDivElement.innerHTML =
      "Attending: " +
      this.state.isGoing +
      "<br />Number of guests: " +
      this.state.numberOfGuests;
  };
  render() {
    return (
      <div style={this.myContainer}>
        <h4>Forms in React</h4>
        <div>
          Dynamic Object Property Name via<br />Computed Member Access
        </div>
        <hr />
        <form onSubmit={this.myHandleSubmit}>
          <label>
            Are you going to the party? :
            <input
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
              name="isGoing"
            />
          </label>
          <br />
          <label>
            How many guests will you bring? :
            <input
              type="number"
              min="-2"
              max="7"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
              name="numberOfGuests"
            />
          </label>
          <br />
          <button type="submit">Submit</button>
          {/* the form's submit event is sending an object with two properties. */}
        </form>
        <hr />
        <div ref={myDiv => (this.myDivElement = myDiv)}>
          Attending: ?<br />Number of guests: ?
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Reservation />, document.getElementById("root"));
