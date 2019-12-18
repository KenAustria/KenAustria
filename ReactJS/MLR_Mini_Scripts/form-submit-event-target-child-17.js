// filename: form-submit-event-target-child-17.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Content extends Component {
  render() {
    return (
      <div style={{ margin: 0, padding: 0, textAlign: "center" }}>
        <h3>Forms in React</h3>
        <div>submit, textarea, event, target.value</div>
        <br />
        <EssayComponent />
      </div>
    );
  }
}
class EssayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { TaValue: "textArea text" };
    this.myHandleSubmit = this.myHandleSubmit.bind(this);
    this.myHandleChange = this.myHandleChange.bind(this);
  }
  myHandleSubmit(e) {
    alert(this.state.TaValue);
    e.preventDefault();
  }
  myHandleChange(e) {
    var itemValue = e.target.value;
    this.setState({ TaValue: itemValue });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.myHandleSubmit}>
          <textArea value={this.state.TaValue} onChange={this.myHandleChange} />
          <h4>{this.state.TaValue}</h4>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
