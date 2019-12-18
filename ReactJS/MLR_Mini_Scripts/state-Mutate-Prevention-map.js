// this is the best technique for this object structure iteration.
// filename: state-Mutate-Prevention-map.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const Person = props => {
  const personStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  const messageStyle = { display: "inline-block", marginBottom: "8px" };
  const inputStyle = { textAlign: "center" };
  return (
    <div style={personStyle}>
      <div style={messageStyle}>
        <span onClick={props.click}>
          {props.name} {props.age}: Click this text
        </span>
      </div>
      <br />
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        style={inputStyle}
      />
    </div>
  ); // IMPORTANT: Safari bug fix for the onClick() double initial click; the styleless (no padding) <span>.
  // this error occurs when clicking on non-button elements,  via onClick().
};
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max", age: 28 },
      { id: "vasdf1", name: "Manu", age: 29 },
      { id: "asdf11", name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };
  nameChangedHandler = (event, id) => {
    const newName = event.target.value;
    this.setState(prevState => ({
      persons: prevState.persons.map(person => {
        if (person.id === id) {
          return { ...person, name: newName };
        }
        return person;
      })
    }));
  };
  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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
    const buttonStyle = {
      margin: "8px",
      padding: "8px",
      backgroundColor: "#fff",
      border: "1px solid #000",
      font: "inherit",
      cursor: "pointer"
    };
    let personsDom = null;
    if (this.state.showPersons) {
      personsDom = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div style={myContainer}>
        <button style={buttonStyle} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {personsDom}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
