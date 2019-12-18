// filename: Clock-12Hour-AmPm.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

function myClockFunction() {
  let myAmPm = "am"; // for postfixing "am" or "pm".
  let getTime = new Date();
  let myHours = getTime.getHours();
  let myMinutes = getTime.getMinutes();
  let mySeconds = getTime.getSeconds();
  if (myHours < 12) {
    myAmPm = "am";
  } else {
    myAmPm = "pm";
  }
  myHours = myHours % 12; // makes a 12 hour clock, instead of a 24 hour clock.
  console.log(myHours);
  if (myHours === 0) {
    myHours = "12";
  }
  if (myHours < 10) {
    myHours = "0" + myHours;
  }
  if (myMinutes < 10) {
    myMinutes = "0" + myMinutes;
  }
  if (mySeconds < 10) {
    mySeconds = "0" + mySeconds;
  }
  let myClock = myHours + ":" + myMinutes + ":" + mySeconds + " " + myAmPm;
  return myClock;
}
function myTick() {
  const myMainContainer = {
    maxWidth: "360px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#eee",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "20px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  const myElement = (
    <div style={myMainContainer}>
      <h4>12 hour am/pm Clock</h4>
      <h4>
        Time: <span style={{ color: "#a00" }}>{myClockFunction()}</span>
      </h4>
    </div>
  );
  ReactDOM.render(myElement, document.getElementById("root"));
}
setInterval(myTick, 1000);
