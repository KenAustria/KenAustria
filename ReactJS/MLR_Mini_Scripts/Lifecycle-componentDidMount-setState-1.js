// filename: Lifecycle-componentDidMount-setState-1.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { data: "Starship" };
  getData() {
    this.myClearInterval = setTimeout(() => {
      this.setState({ data: "Jane" });
    }, 1500);
  }
  componentDidMount() {
    this.getData();
  }
  componentWillUnmount() {
    clearInterval(this.myClearInterval);
  }
  render() {
    const myContainer = {
      maxWidth: "200px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return <div style={myContainer}>{this.state.data}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
