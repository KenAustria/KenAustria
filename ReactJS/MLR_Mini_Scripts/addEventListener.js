// filename: addEventListener.js
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

  const messageStyle = {
    display: "inline-block",
    marginBottom: "8px",
    padding: "4px",
    backgroundColor: "#ffa"
  };

  const inputStyle = { textAlign: "center" };

  document.addEventListener(
    "click",
    e => {
      if (e.target.className === props.myId) {
        props.click(props.myId);
      }
    },
    false
  );

  return (
    <div style={personStyle}>
      <div className={props.myId} style={messageStyle}>
        {props.name} {props.age}: Click this text
      </div>
      <br />
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        style={inputStyle}
      />
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
    showPersons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = personId => {
    const persons = [...this.state.persons];
    const remainingPersons = persons.filter(item => item.id !== personId);
    this.setState({ persons: remainingPersons });
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
                click={this.deletePersonHandler}
                name={person.name}
                age={person.age}
                key={person.id}
                myId={person.id}
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
