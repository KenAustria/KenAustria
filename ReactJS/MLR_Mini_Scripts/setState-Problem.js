// filename: setState-Problem.js
// to view, change this file's name to index.js
// setState() lags behind one button click. localStorage does not have this problem.
// the problem may not actually be setState().
import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myC: "" };
    this.myPreSetState = this.myPreSetState.bind(this);
    this.myA = this.myA.bind(this);
  }
  myPreSetState(myParameter) {
    this.setState({ myC: myParameter });
  }
  myA(myB) {
    this.setState({ myC: myB });
    document.getElementById("myDivElement").innerHTML +=
      this.state.myC + "<br />";
  }
  render() {
    const myContainer = {
      maxWidth: "300px",
      minHeight: "140px",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <div>All new text should say "New Text".</div>
        <hr />
        <MyButtonComponent myD={this.myA} myPreSetState={this.myPreSetState} />
        <hr />
        {/*<MyButtonComponent myD={(myE) => {this.myA(myE)}} myPreSetState={this.myPreSetState} /><hr />
                            this code functions identically to its above counterpart.
                                ReactJS (by default) passes the arguments */}
        <div id="myDivElement" />
      </div>
    );
  }
}
class MyButtonComponent extends Component {
  componentDidMount() {
    this.props.myPreSetState("This text should not display.");
  }
  myButtonMethod(MyParameter) {
    if (MyParameter === 1) {
      this.props.myD("New Text 1");
    } else {
      this.props.myD("New Text 2");
    }
  }
  render() {
    return (
      <div>
        <input
          type="button"
          value="Click me 1"
          onClick={() => this.myButtonMethod(1)}
        />
        <input
          type="button"
          value="Click me 2"
          onClick={() => this.myButtonMethod(2)}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
