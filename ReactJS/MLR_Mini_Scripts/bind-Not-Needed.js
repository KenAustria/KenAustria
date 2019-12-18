// filename: bind-Not-Needed.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myDivValue: "Click me" };
  }
  componentDidMount() {
    this.refs.myDiv.addEventListener(
      "click",
      () =>
        this.state.myDivValue === "Click me"
          ? this.myClickMe()
          : this.myClickAgain()
    );
  }
  myClickMe = () => this.setState({ myDivValue: "Click again" });
  myClickAgain = () => this.setState({ myDivValue: "Click me" });
  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "24px",
      fontFamily: "Helvetica",
      fontWeight: "bold"
    };
    return (
      <div style={myContainer}>
        <div ref="myDiv">{this.state.myDivValue}</div>
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById("root"));
