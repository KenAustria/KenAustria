// filename: localStorage-vs-Reverse-Flow-Arguments.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  componentDidMount() {
    let myLocalStorage1 = [];
    myLocalStorage1.push('{"myProperty1": "Placeholder"}');
    let myLocalStorageStrfy1 = JSON.stringify(myLocalStorage1);
    localStorage.setItem("myLocalStorage1", myLocalStorageStrfy1);
  }
  myMethod() {
    let myGetLocalStorageObj = JSON.parse(
      localStorage.getItem("myLocalStorage1")
    )[0];
    let myLocalStorageProp = JSON.parse(myGetLocalStorageObj);
    document.getElementById("myDivElement").innerHTML +=
      myLocalStorageProp.myProperty1 + "<br />";
  }
  render() {
    const myContainer = {
      maxWidth: "380px",
      minHeight: "140px",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <div>See the comments in the code.</div>
        <hr />
        <MyButtonComponent myStateMethod={this.myMethod} />
        <hr />
        <div id="myDivElement" />
      </div>
    );
  }
}
class MyButtonComponent extends Component {
  myButtonMethod() {
    let myLocalStorage1 = [];
    myLocalStorage1.push('{"myProperty1": "New Text"}');
    let myNewText = JSON.stringify(myLocalStorage1);
    localStorage.setItem("myLocalStorage1", myNewText);
    this.props.myStateMethod();
    // passing an argument up to the parent component, creates a (reverse flow) problem.
    // 1st button click: the state will send its original data first ...
    // the state's data should have been overwritten, so argument's data would render.
    // 2nd & following button clicks: then, the state will send this argument's data.
    // directly using localStorage resolves this problem.
  }
  render() {
    return (
      <div>
        <input
          type="button"
          value="Click me"
          onClick={() => this.myButtonMethod()}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
