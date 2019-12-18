// filename: CSS-Multiple-Inline-Styles.js
// to view, change this file's name to index.js.
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const myContainer = {
      position: "relative",
      maxWidth: "280px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myClasses = {
      myRedBgd: { padding: "6px", backgroundColor: "#f99" },
      myBoldText: { fontWeight: "bold", color: "#700" }
    };
    return (
      <div style={myContainer}>
        <div style={{ ...myClasses.myRedBgd, ...myClasses.myBoldText }}>
          CSS Module Styles
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
