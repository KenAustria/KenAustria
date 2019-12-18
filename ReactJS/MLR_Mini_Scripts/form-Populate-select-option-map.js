// filename: form-Populate-select-option-map.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
//==============================================================================
const MyOptionElement = props => (
  <option value={props.myPropData.myOptColor}>
    {props.myPropData.myOptColor}
  </option>
);
//==============================================================================
class MySelectClass extends Component {
  state = {
    myOptProperties: "",
    myStateOptElements: [
      { myOptColor: "Red" },
      { myOptColor: "Green" },
      { myOptColor: "Blue" },
      { myOptColor: "Gray" }
    ]
  };
  //------------------------------------------------------------------------------
  myOutlineStyle = { outline: "none" };
  //------------------------------------------------------------------------------
  mySelectChange = e => {
    let myOptionValue = e.target.value;
    this.setState({ myOptProperties: myOptionValue });
  };
  myHandleSubmit = e => {
    e.preventDefault();
    alert(this.state.myOptProperties.toUpperCase());
  };
  //------------------------------------------------------------------------------
  render() {
    return (
      <form onSubmit={this.myHandleSubmit}>
        <label htmlFor="mySelectId">
          Pick your favorite color:&#160;
          <select
            onChange={this.mySelectChange}
            id="mySelectId"
            style={this.myOutlineStyle}
          >
            {this.state.myStateOptElements.map((myColor, i) => (
              <MyOptionElement myPropData={myColor} key={i} />
            ))}
          </select>
        </label>
        <br />
        <button type="submit" style={this.myOutlineStyle}>
          Submit
        </button>
      </form>
    );
  }
}
//==============================================================================
const MyApp = () => {
  const myContainerStyle = {
    maxWidth: "420px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  const myH4Style = { margin: "0" };
  const myHrStyle = { margin: "5px 0" };
  //------------------------------------------------------------------------------
  return (
    <div style={myContainerStyle}>
      <h4 style={myH4Style}>Forms in ReactJS</h4>
      <hr style={myHrStyle} />
      <div>select, option, event, target.value, map(), preventDefault()</div>
      <hr />
      <MySelectClass />
    </div>
  );
};
ReactDOM.render(<MyApp />, document.getElementById("root"));
