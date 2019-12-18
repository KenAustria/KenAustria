// filename: findDOMNode-ReactDOM-react-dom-14.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { welcome: "Welcome to React!" };
  }
  render() {
    return (
      <div className="App">
        <Content propsWelcome={this.state.welcome} />
      </div>
    );
  }
}
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], count: 0 };
    this.updateMyState = this.updateMyState.bind(this);
    this.forceUpdateRandomNumber = this.forceUpdateRandomNumber.bind(this);
    this.findMyDOMNode = this.findMyDOMNode.bind(this);
  }
  updateMyState() {
    var count = this.state.count;
    count++;
    var item = count + " ";
    var myArray = this.state.data;
    myArray.push(item);
    this.setState({ data: myArray, count: count });
  }
  forceUpdateRandomNumber() {
    this.forceUpdate();
  }
  findMyDOMNode() {
    var myDiv = document.getElementById("myDiv");
    ReactDOM.findDOMNode(myDiv).style.color = "#900";
    ReactDOM.findDOMNode(myDiv).style.fontWeight = "bold";
  }
  render() {
    const myContainer = {
      maxWidth: "400px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#bbb",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myButton = { marginBottom: "6px" };
    return (
      <div style={myContainer}>
        <h3>{this.props.propsWelcome}</h3>
        <hr />
        <button onClick={this.updateMyState} style={myButton}>
          Click Me
        </button>
        <div>State Data: {this.state.data}</div>
        <hr />
        <button onClick={this.forceUpdateRandomNumber} style={myButton}>
          Random Number
        </button>
        <div>Random Number: {Math.random()}</div>
        <hr />
        <button onClick={this.findMyDOMNode} style={myButton}>
          Find My DOM Node
        </button>
        <div id="myDiv">This is my DIV</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
