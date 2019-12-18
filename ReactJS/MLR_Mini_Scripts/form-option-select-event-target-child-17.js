// filename: form-option-select-event-target-child-17.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class FlavorForm extends Component {
  state = { optValue: "grapefruit" };
  mySelectChange = e => {
    let itemValue = e.target.value;
    this.setState({ optValue: itemValue });
  };
  myHandleSubmit = e => {
    e.preventDefault();
    alert(this.state.optValue.toUpperCase());
  };
  render() {
    return (
      <form onSubmit={this.myHandleSubmit}>
        <label htmlFor="mySelectId">
          Pick your favorite flavor:
          <select onChange={this.mySelectChange} id="mySelectId">
            <option value="grapefruit">Grape Fruit</option>
            <option value="apple">Apple</option>
            <option value="chocolate">Chocolate</option>
            <option value="banana">Banana</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
class App extends Component {
  render() {
    const myContainer = {
      maxWidth: "440px",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <h3 style={{ margin: 0 }}>Forms in React</h3>
        <div>Option Select, event, target.value, preventDefault()</div>
        <br />
        <FlavorForm />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
