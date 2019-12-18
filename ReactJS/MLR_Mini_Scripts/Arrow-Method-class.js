// filename: Arrow-Method-class.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myInputValue: "My input" };
    //        this.myInputChangeFunc = this.myInputChangeFunc.bind(this);
    // this is not needed when a fat arrow method is used.
  }

  myInputChangeFunc = event => {
    this.setState({ myInputValue: event.target.value });
  };

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
        <h3>Using a Fat Arrow Method</h3>
        <form>
          <input
            value={this.state.myInputValue}
            onChange={this.myInputChangeFunc}
          />
        </form>
        <h4>{this.state.myInputValue}</h4>
        {/* what is currently inside the input field. */}
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
