// filename: Context-API-Simple.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
// import myCreateContext from 'the exporting .js file';

const myCreateContext = React.createContext(false);
// above: prefix export, if in a different file. then, ...
// ... import {myCreateContext} from './myCreateContext.js';
// false: is an optional default user value.
// myCreateContext is a named instance, so, it can be specifically applied to a/many situation(s).
// see <myCreateContext.Provider ...> below.
const Person = () => {
  const personStyle = {
    maxWidth: "80%",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  return (
    <div style={personStyle}>
      <myCreateContext.Consumer>
        {myAuth =>
          myAuth ? <div>Authenticated: Yes</div> : <div>Authenticated: No</div>
        }
      </myCreateContext.Consumer>
    </div>
  );
  // for this script, myAuth is a boolean.
  // if the whole state was passed in,  then: {myAuth => myAuth.myAuthenticated ? <div> ...
  // meaning, myAuth could be an object.
};
class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Max" },
      { id: "vasdf1", name: "Manu" },
      { id: "asdf11", name: "Stephanie" }
    ],
    myAuthenticated: false
  };
  myAuthMethod = () =>
    this.setState(nextState => {
      return { myAuthenticated: !nextState.myAuthenticated };
    });
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
          // createContext() is applied, so, no user props used.
          return <Person key={person.id} />;
        })}
      </div>
    );
    return (
      <div style={myContainer}>
        {this.state.myAuthenticated ? (
          <button onClick={this.myAuthMethod}>Remove authentication</button>
        ) : (
          <button onClick={this.myAuthMethod}>Get authenticated</button>
        )}
        <myCreateContext.Provider value={this.state.myAuthenticated}>
          {personsDom}
          {/* value={ ... props is a required keyword. */}
          {/* all instances inside here will receive props value's value. */}
        </myCreateContext.Provider>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// any elements (including all instances) wrapped inside the <myCreateContext.Provider> component,
// will have access to the related data. So, passing individual props is not used.
// the value={ ... props is a required keyword.
