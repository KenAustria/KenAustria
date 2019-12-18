// filename: iframe.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favorited: false };
  }
  render() {
    const myContainer = {
      maxWidth: "430px",
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
        <iframe
          src="http://www.youtube.com/embed/xDMP3i36naA"
          title="my-iframe"
          sandbox="allow-same-origin allow-scripts allow-presentation"
          width="400"
          height="400"
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// title & sandbox attributes are necessary to avoid warnings.
//------------------------------------------------------------------
// react-iframe:
// https://www.npmjs.com/package/react-iframe
// npm install --save react-iframe
