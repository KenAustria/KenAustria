// filename: defaultProps-Simple-12.js
import React, { Component } from "react";
class App extends Component {
  render() {
    const myCssStyle = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myCssStyle}>
        {this.props.myDefaultProps1}
        <br />
        {this.props.myDefaultProps2}
      </div>
    );
  }
}
App.defaultProps = {
  myDefaultProps1: "Default props One ...",
  myDefaultProps2: "Default props Two ..."
};
export default App;
