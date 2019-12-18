// filename: form-focus-push.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
//======================================================================================
class Person extends Component {
  myInputRef = React.createRef();
  myInputStyle = { marginBottom: "6px" };
  componentDidMount() {
    if (this.props.hasFocus) {
      this.myInputRef.current.focus();
    }
  }
  render() {
    return (
      <div>
        <div onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old
        </div>
        <input
          type="text"
          value={this.props.name}
          ref={this.myInputRef}
          onChange={this.props.changed}
          style={this.myInputStyle}
        />
      </div>
    );
  }
}
//======================================================================================
const Persons = props =>
  props.personsList.map((person, personIndex) => {
    return (
      <Person
        key={person.id + person.name}
        name={person.name}
        age={person.age}
        hasFocus={person.hasFocus}
        clicked={() => props.clicked(personIndex)}
        changed={event => props.changed(event, person.id)}
      />
    );
  });
//======================================================================================
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Ashish", age: "24", hasFocus: "false" },
      { id: 2, name: "Divya", age: "22", hasFocus: "false" },
      { id: 3, name: "Renu", age: "24", hasFocus: "false" }
    ],
    title: "Demo App",
    userName: "Rajveer",
    showPersonDiv: true,
    userInput: "userinput"
  };
  //--------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "340px",
    margin: "10px auto",
    padding: "4px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  //--------------------------------------------------------------------------------------
  nameChangedHandler = (ev, id) => {
    const currentEventElement = ev.target;
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const persons = [...this.state.persons];
    const newPersons = [];
    for (let currentItem of persons) {
      const currentItemClone = { ...currentItem };
      if (currentItemClone.id === persons[personIndex].id) {
        currentItemClone.name = currentEventElement.value;
        currentItemClone.hasFocus = "true";
      } else {
        currentItemClone.hasFocus = "false";
      }
      newPersons.push(currentItemClone);
    }
    this.setState({ persons: newPersons });
  };
  deletePersonHandler = personIndex => {
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({ persons: person });
  };
  //--------------------------------------------------------------------------------------
  render() {
    let persons = null;
    if (this.state.showPersonDiv) {
      persons = (
        <Persons
          personsList={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return <div style={this.myContainerStyle}>{persons}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
