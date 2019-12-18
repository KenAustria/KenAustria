// filename: Clock-11.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  render() {
    const myMainContainer = {
      maxWidth: "400px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "20px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myMainContainer}>
        <Content />
        <Clock />
      </div>
      // above are like Function callers for the (below) Components.
      // this is the main container (of the rendered webpage content).
      // this determines where the content is placed (not the code below).
    );
  }
}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; // this is initializing the "state" & setting a value.
    // state: can represent many object properties.
  }
  componentDidMount() {
    this.timeID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  // no "let" needed to "timeID".
  // this.timeID =: the "this" is necessary.
  tick() {
    this.setState({ date: new Date() });
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  } // this is not used for this example.
  render() {
    return (
      <div>
        <h3>The time is: {this.state.date.toLocaleTimeString()}</h3>
      </div>
      // when this has completed rendering to the DOM, componentDidMount() invokes.
      // componentWillUnmount() is not invoked, in this script.
    );
  }
}
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStateData: [
        { myId: 1, myName: "Foo", myAge: "30" },
        { myId: 2, myName: "Bar", myAge: "22" },
        { myId: 3, myName: "Baz", myAge: "35" }
      ]
    };
  }
  render() {
    var myStyle = { fontSize: 24, color: "#900" }; // parenthesis not necessary here.
    return (
      <div>
        <h2 style={myStyle}>Creating a clock</h2>
        <table style={{ margin: "0px auto 10px" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.myStateData.map((myPerson, i) => (
              <TableRow key={i} myPropData={myPerson} />
            ))}
            {/* above: <TableRow /> but with attributes inside it.
                                    this places the class "TableRow"s content here.*/}
          </tbody>
        </table>
      </div>
    );
  }
}
class TableRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.myPropData.myId}</td>
        <td>{this.props.myPropData.myName}</td>
        <td>{this.props.myPropData.myAge}</td>
      </tr>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
