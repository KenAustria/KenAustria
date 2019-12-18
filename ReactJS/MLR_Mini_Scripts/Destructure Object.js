// filename: Destructure Object.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
const MyChildComponent = ({ myStateEmbeddedObject }) => (
  <div>{myStateEmbeddedObject.myProperty}</div>
);
class MyParentComponent extends Component {
  state = { myStateEmbeddedObject: { myProperty: "I am a property." } };
  render() {
    return <MyChildComponent {...this.state} />;
  }
}
ReactDOM.render(<MyParentComponent />, document.getElementById("root"));
