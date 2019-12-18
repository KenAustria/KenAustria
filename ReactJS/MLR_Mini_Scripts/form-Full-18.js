// filename: form-Full-18.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React!"
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}
class Content extends Component {
  render() {
    return (
      <div className="App-intro">
        <br />
        <div>Forms in React</div>
        <br />
        <div>Option Select, event, target.value, child, preventDefault()</div>
        <hr />
        <EssayComponent />
        <FlavorForm />
        <hr />
        <Reservation />
      </div>
    );
  }
}
class EssayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { taValue: "textArea text" };
    this.myTxtAreaChange = this.myTxtAreaChange.bind(this);
    this.myHandleSubmit = this.myHandleSubmit.bind(this);
  }
  myTxtAreaChange(e) {
    var itemValue = e.target.value;
    this.setState({ taValue: itemValue, optValue: itemValue });
  }
  myHandleSubmit(e) {
    alert(this.state.taValue);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.myHandleSubmit}>
          <textArea
            value={this.state.taValue}
            onChange={this.myTxtAreaChange}
          />
          {/* onChange: camelCase must be used in JSX. */}
          <div>{this.state.taValue}</div>
          <button type="submit">Submit</button>
        </form>
        <hr />
      </div>
    );
  }
}
class FlavorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { optValue: "grapefruit" };
    this.mySelectChange = this.mySelectChange.bind(this);
    this.myHandleSubmit = this.myHandleSubmit.bind(this);
  }
  mySelectChange(e) {
    var itemValue = e.target.value;
    this.setState({ optValue: itemValue });
  }
  myHandleSubmit(e) {
    alert(this.state.optValue.toUpperCase());
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.myHandleSubmit}>
          <label>
            Pick your favorite flavor:
            <select onChange={this.mySelectChange}>
              <option value="grapefruit">Grape Fruit</option>
              <option value="apple">Apple</option>
              <option value="chocolate">Chocolate</option>
              <option value="banana">Banana</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = { isGoing: true, numberOfGuests: 2 };
    this.handleImputChange = this.handleImputChange.bind(this);
    this.myHandleSubmit = this.myHandleSubmit.bind(this);
  }
  handleImputChange(e) {
    const myTarget = e.target;
    const myValue =
      myTarget.type === "checkbox" ? myTarget.checked : myTarget.value;
    const myName = myTarget.name;
    this.setState({ [myName]: myValue });
  }
  myHandleSubmit(e) {
    var myFdbck = document.getElementById("myFeedback");
    myFdbck.innerHTML =
      "Attending: " +
      this.state.isGoing +
      "<br />Number of guests: " +
      this.state.numberOfGuests;
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.myHandleSubmit}>
          <label>
            Are you going to the party? :
            <input
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleImputChange}
              name="isGoing"
            />
          </label>
          <br />
          <label>
            How many guests will you bring? :
            <input
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleImputChange}
              name="numberOfGuests"
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <hr />
        <div id="myFeedback">
          Attending: ?<br />Number of guests: ?
        </div>
      </div>
    );
  }
}
export default App;
