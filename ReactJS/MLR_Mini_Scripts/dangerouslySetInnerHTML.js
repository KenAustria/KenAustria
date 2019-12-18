// dangerouslySetInnerHTML with htmlDecode: https://codepen.io/ilanus/pen/QKgoLA?editors=1010
// output HTML: "dangerouslySetInnerHTML:"
// filename: dangerouslySetInnerHTML.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myDescription:
        "&lt;p&gt;&lt;strong&gt;dangerouslySetInnerHTML:&lt;/strong&gt;&lt;/p&gt;"
    };
  }
  myHtmlDecode = myInput => {
    const myDivElement = document.createElement("div");
    myDivElement.innerHTML = myInput;
    return myDivElement.childNodes.length === 0
      ? ""
      : myDivElement.childNodes[0].nodeValue;
  };
  render() {
    const myContainer = {
      maxWidth: "320px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const { myDescription } = this.state;
    return (
      <div
        dangerouslySetInnerHTML={{ __html: this.myHtmlDecode(myDescription) }}
        style={myContainer}
      />
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
