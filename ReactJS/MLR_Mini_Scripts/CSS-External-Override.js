// filename: CSS-External-Override.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const App = props => {
  const myCssStyle = {
    maxWidth: "200px",
    margin: "6px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    border: "1px solid #000",
    textAlign: "center",
    fontSize: "16px"
  };
  return (
    <div style={myCssStyle}>
      <span className="myBtnStyle">
        <button>Click Me</button>
      </span>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
// in the index.css
// button {width:60%; margin:6px auto; padding:6px 0; background-color:#7c0;
//    border:1px solid #000; border-radius:10px; font-size:24px}
// .myBtnStyle button {background-color:#f00;}
// .myBtnStyle { ... } overrides the CSS button { ... } selector CSS attribute.
