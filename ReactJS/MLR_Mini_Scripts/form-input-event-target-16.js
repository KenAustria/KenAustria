// filename: form-input-event-target-16.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props); // this "super(props)" is necessary.
    this.state = { myInputValue: "My input" };
    this.myInputChangeFunc = this.myInputChangeFunc.bind(this);
  }
  myInputChangeFunc(e) {
    let itemValue = e.target.value;
    this.setState({ myInputValue: itemValue });
  }
  render() {
    const myContainer = {
      maxWidth: "340px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <h3>Forms in React</h3>
        <div>input, event, target.value</div>
        <br />
        <input
          value={this.state.myInputValue}
          onChange={this.myInputChangeFunc}
          style={{ marginBottom: 8 }}
        />
        <h4>{this.state.myInputValue}</h4>
        {/* what is currently inside the input field. */}
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
