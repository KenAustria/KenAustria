// filename: render-of-ReactDOM.js
// this file must be named index.js
import React from "react";
import { render } from "react-dom";

const App = () => <div>Hello</div>;
render(<App />, document.getElementById("root"));
