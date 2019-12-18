// filename: Pass-Properties-index-12.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./Pass-Properties-App-12"; // import this class from this .js file.
// link to the main authored code.
// note: no ".js" extension.
// this is the parent of the App (.js) file.
import "./index.css";

ReactDOM.render(
  <App
    myPropOneExternal="Prop 1 from external."
    myPropTwoExternal="Prop 2 from external."
  />,
  document.getElementById("root")
); // this child (method) should only pass data to it's parent (App.js), not process data.
// "propOneExternal" & "propTwoExternal" are properties sent to App.js for processing.
// App-index-Pass-Properties.js
