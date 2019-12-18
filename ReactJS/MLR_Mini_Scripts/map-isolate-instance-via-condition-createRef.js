// filename: map-isolate-instance-via-condition-createRef.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Person extends Component {
  inputRef = React.createRef();
  componentDidMount() {
    if (this.props.name === "Manu") {
      this.inputRef.current.style.backgroundColor = "#ff7";
      // focus() won't work due to "readOnly".
    }
  }
  render() {
    const personStyle = {
      maxWidth: "80%",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#bbb",
      border: "1px solid #eee",
      boxShadow: "0 2px 3px #555",
      textAlign: "center"
    };
    const inputStyle = { textAlign: "center" };
    return (
      <div style={personStyle}>
        <input
          type="text"
          value={this.props.name}
          style={inputStyle}
          ref={this.inputRef}
          readOnly
        />
      </div>
    );
  }
}
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max" },
      { id: "vasdf1", name: "Manu" },
      { id: "asdf11", name: "Stephanie" }
    ]
  };
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#9cf",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const personsDom = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person key={person.id} name={person.name} />;
        })}
      </div>
    );
    return <div style={myContainer}>{personsDom}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
