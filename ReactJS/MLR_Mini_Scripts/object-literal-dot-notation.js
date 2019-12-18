// filename: object-literal-dot-notation.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

const MyParentComponent = {
  MyChildComponent: myPropParam => {
    // object literal, dot notation.
    const myStyle = {
      padding: "4px",
      backgroundColor: "#fff",
      border: "1px solid #000"
    };
    const myPropText = <span style={myStyle}>{myPropParam.myProp}</span>;
    // myPropParam: is the whole prop. myProp: is "Hello".
    return <div>{myPropText}&#160;&#160;This is my prop.</div>;
  }
};

class App extends React.Component {
  // object literal, dot notation.
  myFunction() {
    return <MyParentComponent.MyChildComponent myProp="Hello" />;
    // this becomes a div element with text: "Hello This is my prop.".
  }
  render() {
    const myMainContainer = {
      maxWidth: "380px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ff7",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myMainContainer}>{this.myFunction()}</div>
      // this becomes a component with text: "Hello This is my prop.".
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
