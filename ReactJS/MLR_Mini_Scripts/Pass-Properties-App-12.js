// filename: Pass-Properties-App-12.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: "Welcome to React",
      contentText: "We will discuss passing Properties from the index page."
      // this initializes properties to a "state" & sets a value.
    };
  }
  render() {
    return (
      <div className="App">
        <Header myHeader={this.state.headerText} />
        {/* set "headerText" to "header". */}
        <Content
          content={this.state.contentText} // set "contentText" to "content".
          // this sets property values of the (above) "state" to "class" property names (below).
          myPropOneExtrnl={this.props.myPropOneExternal} // myPropOneExternal: comes from the index.js
          myPropTwoExtrnl={this.props.myPropTwoExternal} // myPropTwoExternal: comes from the index.js
        />
        {/* above are like Function callers for the (below) Components. */}
        {/* this is the main container (of the rendered webpage content). */}
        {/* this determines where the content is placed (not the code below). */}
      </div>
    );
  }
}
class Header extends Component {
  // this will be placed inside the "App" Component (container).
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{this.props.myHeader}</h2>
        {/* Welcome to React */}
        {/* get "content" from the parent Component. */}
      </div>
    );
  }
}
class Content extends Component {
  // this will be placed inside the "App" Component (container).
  render() {
    var myStyle = { fontSize: 24, color: "#900" }; // parenthesis not necessary here.
    return (
      <div className="App-intro">
        <h2 style={myStyle}>What is Component</h2>
        <p>{this.props.content}</p>
        {/* We will discuss passing Properties from the index page. */}
        {/* get "content" from the parent Component. */}
        <p>{this.props.myPropOneExtrnl}</p>
        {/* Prop 1 from external. */}
        {/* get "content" from the parent Component >External Index. */}
        <p>{this.props.myPropTwoExtrnl}</p>
        {/* Prop 2 from external. */}
        {/* get "content" from the parent Component >External Index. */}
      </div>
    );
  }
}
// index-Pass-Properties.js
export default App;
