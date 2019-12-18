// filename: form-input-event-target-child-16.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = { myInputValue: "My input" };
    this.myInputChangeFunc = this.myInputChangeFunc.bind(this);
  }
  myInputChangeFunc(e) {
    var itemValue = e.target.value;
    this.setState({ myInputValue: itemValue });
  }
  render() {
    return (
      <div style={{ margin: 0, padding: 0, textAlign: "center" }}>
        <h3>Forms in React</h3>
        <div>input, event, target.value, child</div>
        <br />
        <MyInputComponent
          myInptVal={this.state.myInputValue}
          myInputChange={this.myInputChangeFunc}
        />
        <h4>{this.state.myInputValue}</h4>
        {/* what is currently inside the input field. */}
      </div>
    );
  }
}
class MyInputComponent extends Component {
  render() {
    return (
      <div>
        <input
          value={this.props.myInptVal}
          onChange={this.props.myInputChange}
        />
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
