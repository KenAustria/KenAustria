// filename: children.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
  render() {
    const myChildContainer = {
      marginBottom: "8px",
      padding: "10px 0",
      backgroundColor: "#dd7"
    };
    return (
      <div style={myChildContainer}>
        <h4>#2: Child</h4>
        {this.props.children}
        {/* this.props.children: allows the above "#3:" to render.
                            the #3: renders here, because this is where {this.props.children} is placed.
                                children: can pass arguments. children(myMethod, this)
                                    the 1st argument can be used as a callback function. */}
      </div>
    );
  }
}
class ParentClass extends React.Component {
  render() {
    const myParentContainer = {
      maxWidth: "400px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myParentContainer}>
        <h3>#1: Parent</h3>
        <Child>#3: This is rendered after the "Child" text.</Child>
        {/* content between the above "Child" tags is considered "children".
                            it's accessed via "props" (see below).
                        note: (above) its content originates inside ParentClass, ...
                            unlike the rest of this Child component's content. */}
        <div>#4: The last element in the Parent component.</div>
      </div>
    );
  }
}
ReactDOM.render(<ParentClass />, document.getElementById("root"));
