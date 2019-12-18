// filename: ref-Simple.js
// to view, change this file's name to index.js
// this ref string format is depreciated.
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  myDivRef = React.createRef();
  myTextInput2 = React.createRef();
  myOnChange = () => {
    if (this.myTextInput2.current.value !== "") {
      this.myTextInput2.current.style.backgroundColor = "#dfd";
    } else {
      this.myTextInput2.current.style.backgroundColor = "#bff";
    }
  };
  myOnFocus = () => {
    this.myTextInput2.current.value = ""; // required: React 16.3 ref.
    return false;
  };
  componentDidMount() {
    // only one ref name per element.
    this.myDivRef.current.style.color = "#b00"; // React 16.3 ref.
    this.myDivRef.current.style.fontWeight = "bold"; // React 16.3 ref.
    this.myTextInput1.focus(); // note: ".refs" is not used when using the arrow function.
    this.myTextInput2.current.style.backgroundColor = "#fdd";
    this.myDivElement.style.backgroundColor = "#cc0";
    this.myDivElement.style.padding = "3px";
  }
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <div ref={this.myDivRef}>2018: React 16.3 ref</div>
        <hr />
        <input
          type="text"
          placeholder="Using ref and auto-focus"
          ref={myInput => (this.myTextInput1 = myInput)}
          onChange={this.myOnChange}
          style={{ width: "220px", textAlign: "center" }}
        />
        <br />
        <input
          type="text"
          placeholder="Using ref and Bgd color"
          ref={this.myTextInput2}
          onChange={this.myOnChange}
          onFocus={this.myOnFocus}
          style={{ width: "220px", textAlign: "center" }}
        />
        <br />
        <br />
        <div ref={myDivParameter => (this.myDivElement = myDivParameter)}>
          Using ref and Bgd color
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
