import React from "react";
import ReactDOM from "react-dom";
function tick() {
  const myElement = (
    <div>
      <h2>Hello, world!</h2>
      <h3>It is {new Date().toLocaleTimeString()}.</h3>
      {/* only this is updated every second */}
    </div>
  );
  ReactDOM.render(myElement, document.getElementById("root"));
}
setInterval(tick, 1000);
