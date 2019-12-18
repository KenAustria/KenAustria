// filename: condition-in-return-ampersands.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Person = props => {
  const personStyle = {
    maxWidth: "200px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  return (
    <div style={personStyle}>
      <div>
        {props.name} {props.age}
      </div>
    </div>
  );
};
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    showCards: true
  };
  render() {
    const myContainer = {
      maxWidth: "380px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#9cf",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        {this.state.showCards && (
          <div>
            {this.state.persons.map(person => (
              <Person key={person.id} name={person.name} age={person.age} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
