// filename: bind-event-Child.js
// this file must be named index.js
import React, { Component } from "react";
const Person = props => {
  const myInputStyle = { marginBottom: "6px", textAlign: "center" };
  return (
    <div>
      <input
        type="text"
        onChange={props.changed}
        value={props.name}
        style={myInputStyle}
      />: {props.name}
    </div>
  );
};
class App extends Component {
  state = {
    persons: [
      { myId: "myIdOne", myName: "Max" },
      { myId: "myIdTwo", myName: "Manu" },
      { myId: "myIdThree", myName: "Stephanie" }
    ]
  };
  nameChangedHandler(myId, event) {
    const persons = this.state.persons.map(person => {
      return person.myId === myId
        ? { ...person, myName: event.target.value }
        : person;
    });
    this.setState({ persons });
  }
  render() {
    const myContainer = {
      maxWidth: "340px",
      margin: "10px auto",
      padding: "10px 0 4px",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    let persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return (
            <Person
              key={person.myId}
              name={person.myName}
              changed={this.nameChangedHandler.bind(this, person.myId)}
            />
          );
        })}
      </div>
    );
    return <div style={myContainer}>{persons}</div>;
  }
}
export default App;
// https://reactjs.org/docs/handling-events.html#passing-arguments-to-event-handlers
