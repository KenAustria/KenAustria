// filename: defaultProps-12.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myHeaderText: "Welcome to React",
      mySubtitleText: "defaultProps - props",
      myContentText: "We will discuss defaultProps."
    };
  }
  render() {
    return (
      <div className="App">
        <Header myFromStateHeaderTitle={this.state.myHeaderText} />
        <Content
          myFromStateContentDesc={this.state.myContentText}
          myFromStateSubtitleTxt={this.state.mySubtitleText}
        />
        {/* above are like Function callers for the (below) Components. */}
        {/* this is the main container (of the rendered webpage content). */}
        {/* this determines where the content is placed (not the code below). */}
        {/* this class is passing its state (as properties) to its child classes */}
        {this.props.myDefaultProps1}
        {/* from "defaultProps". this will immediately render, after the Content class HTML element. */}
        {this.props.myDefaultProps2}
        {/* from "defaultProps". this will immediately render, after the Content class HTML element. */}
      </div>
    );
  }
}
App.defaultProps = {
  // defaultProps: a JSX native property.
  // below: always assign, to define default values for "props".
  myDefaultProps1: "Default props One ...",
  myDefaultProps2: "Default props Two ..."
};
class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{this.props.myFromStateHeaderTitle}</h2>
        {/* Welcome to React */}
        {/* from "props, but not "defaultProps". */}
      </div>
    );
  }
}
class Content extends Component {
  render() {
    var myStyle = { fontSize: 24, color: "#900" }; // parenthesis not necessary here.
    return (
      <div className="App-intro">
        <h2 style={myStyle}>{this.props.myFromStateSubtitleTxt}</h2>
        {/* defaultProps - props */}
        {/* from "props, but not "defaultProps". */}
        <p>{this.props.myFromStateContentDesc}</p>
        {/* We will discuss defaultProps. */}
        {/* from "props, but not "defaultProps". */}
      </div>
    );
  }
}
export default App;
