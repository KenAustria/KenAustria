// filename: bind-event.js
// this file must be named index.js
import React, { Component } from "react";
class App extends Component {
  state = {
    persons: [{ id: "myIdOne", myName: "Max" }]
  };

  nameChangedHandler(id, event) {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.myName = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };

    const myInputStyle = { marginBottom: "6px", textAlign: "center" };

    let persons = (
      <input
        type="text"
        onChange={this.nameChangedHandler.bind(this, "myIdOne")}
        value={this.state.persons[0].myName}
        style={myInputStyle}
      />
    );

    return (
      <div style={myContainer}>
        {persons}
        <br />State: {this.state.persons[0].myName}
      </div>
    );
  }
}
export default App;
