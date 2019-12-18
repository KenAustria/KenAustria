// filename: defaultProps-setTimeout-setState.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { myDefaultState: "This replaced defaultProps One." };
  }
  componentDidMount() {
    this.mySetTimeout = setTimeout(() => {
      // this.mySetTimeout =: the "this" is necessary.
      this.setState({
        myDefaultState: "Now, the original state's value was replaced."
      });
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.mySetTimeout);
  }
  render() {
    const myCssStyle = {
      maxWidth: "340px",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myCssStyle}>
        <MyDefaultProps myDefaultProps1={this.state.myDefaultState} />
      </div>
    );
  }
}
class MyDefaultProps extends Component {
  render() {
    return (
      <div>
        {this.props.myDefaultProps1}
        <br />
        {this.props.myDefaultProps2}
      </div>
    );
  }
}
MyDefaultProps.defaultProps = {
  myDefaultProps1: "Default props One.",
  myDefaultProps2: "Default props Two."
};
ReactDOM.render(<App />, document.getElementById("root"));
