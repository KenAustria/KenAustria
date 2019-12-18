// filename: state-props-12.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React",
      contentText: "We will discuss Information flow."
      // this initializes properties to a "state" & sets a value.
    };
  }
  render() {
    return (
      <div className="App">
        <Header myHeader={this.state.headerText} />
        {/* set "headerText" to "header". */}
        <Content myContent={this.state.contentText} />
        {/* set "contentText" to "content". */}
        {/* above are like Function callers for the (below) child Components. */}
        {/* its inner content is like an argument. */}
        {/* this sets property values of the (above) "state" to "class props" names (below). */}
        {/* this is the main container (of the rendered webpage content). */}
        {/* this determines where the content is placed (not the code below). */}
      </div>
    );
  }
}
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{this.props.myHeader}</h2>
        {/* Welcome to React */}
        {/* get "myHeader" from the parent Component. */}
      </div>
    );
  }
}
class Content extends Component {
  render() {
    var myStyle = { fontSize: 24, color: "#900" }; // parenthesis not necessary here.
    return (
      <div className="App-intro">
        <h2 style={myStyle}>state - props</h2>
        <p>{this.props.myContent}</p>
        {/* We will discuss  Information flow. */}
        {/* get "myContent" from the parent Component. */}
      </div>
    );
  }
}
export default App;
