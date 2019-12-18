// filename: Clock-Simple-index-11.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";
function myTick() {
  const myContainer = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  const myElement = (
    <div style={myContainer}>
      <h3>a simple Clock</h3>
      <h4>Current time: {new Date().toLocaleTimeString()}</h4>
    </div>
  );
  ReactDOM.render(myElement, document.getElementById("root"));
  // note: myElement is being rendered, not a class.
}
setInterval(myTick, 1000);
