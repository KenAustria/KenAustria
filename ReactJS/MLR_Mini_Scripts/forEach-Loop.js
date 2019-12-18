// filename: forEach-Loop.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Person = props => {
  const divStyle = {
    maxWidth: "84%",
    margin: "0 auto 6px",
    padding: "4px",
    backgroundColor: "#ff9",
    border: "1px solid #000",
    borderRadius: "8px"
  };

  return (
    <div style={divStyle}>
      I'm {props.name} and I'm {props.age} years old.
    </div>
  );
};

class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Geddy", age: 28 },
      { id: "vasdf1", name: "Alex", age: 27 },
      { id: "asdf11", name: "Neil", age: 29 }
    ]
  };

  persons = () => {
    const personsArray = [];
    this.state.persons.forEach(person =>
      personsArray.push(
        <Person name={person.name} age={person.age} key={person.id} />
      )
    );
    return personsArray;
  };

  render() {
    const mainContainer = {
      maxWidth: "360px",
      margin: "10px auto",
      padding: "6px 0 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };

    return <div style={mainContainer}>{this.persons()}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
