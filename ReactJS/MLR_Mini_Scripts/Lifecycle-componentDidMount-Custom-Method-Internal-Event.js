// filename: Lifecycle-componentDidMount-Custom-Method-Internal-Event.js
// filename: when using, rename to index.js
import React from "react";
import ReactDOM from "react-dom";
import "./localStorage.css";
class MyLocalStorage extends React.Component {
  componentDidMount() {
    let myAddLsCharMethActive = false;
    //==================================================================== set the original data.
    let myTvCharsObj = [];
    if (myAddLsCharMethActive === false) {
      myAddLsCharMethActive = true;
      myTvCharsObj.push(
        '{"myTitle": "Simpsons", "myFirstName": "Homer", "myLastName": "Simpson"}',
        '{"myTitle": "Family Guy", "myFirstName": "Peter", "myLastName": "Griffen"}',
        '{"myTitle": "Batman", "myFirstName": "Bruce", "myLastName": "Wayne"}'
      );
      let myTvCharStrfy = JSON.stringify(myTvCharsObj); // this must be placed below the push() method.
      localStorage.setItem("myTvCharsObj", myTvCharStrfy);
      //---------------------------------------------------------------- get & print current data.
      let myTvCharObject = JSON.parse(localStorage.getItem("myTvCharsObj"));
      for (let i = 0; i < myTvCharObject.length; i++) {
        let myTvCharObjParse = JSON.parse(localStorage.getItem("myTvCharsObj"))[
          i
        ];
        let myTvCharPropsParse = JSON.parse(myTvCharObjParse);
        document.getElementById("myDivElement").innerHTML +=
          myTvCharPropsParse.myTitle +
          ": " +
          myTvCharPropsParse.myFirstName +
          "<br>";
      }
    }
    //==================================================================== add new data
    let myAddLsCharMethod = () => {
      myAddLsCharMethActive = false;
      document.getElementById("myDivElement").innerHTML = "";
      myTvCharsObj.push(
        '{"myTitle": "Star Wars", "myFirstName": "Luke", "myLastName": "Skywalker"}'
      );
      let myNewTvCharStrfy = JSON.stringify(myTvCharsObj);
      localStorage.setItem("myTvCharsObj", myNewTvCharStrfy);
      //---------------------------------------------------------------- get & print current (updated) data.
      let myTvCharObject = JSON.parse(localStorage.getItem("myTvCharsObj"));
      for (let myI = 0; myI < myTvCharObject.length; myI++) {
        let myTvCharObjParse = JSON.parse(localStorage.getItem("myTvCharsObj"))[
          myI
        ];
        let myTvCharPropsParse = JSON.parse(myTvCharObjParse);
        document.getElementById("myDivElement").innerHTML +=
          myTvCharPropsParse.myTitle +
          ": " +
          myTvCharPropsParse.myFirstName +
          "<br>";
      }
    };
    document.getElementById("myButton").onclick = () => myAddLsCharMethod(); // IMPORTANT.
    // this event must be inside componentDidMount.
    // inside componentDidMount, the event must accompany its method construct.
  }
  render() {
    return (
      <div className="myMainContainer">
        <div>Add to Multiple Objects in Local Storage</div>
        <hr />
        <button type="button" id="myButton">
          Add the new character and display all
        </button>
        <div id="myDivElement" />
      </div>
    );
  }
}
ReactDOM.render(<MyLocalStorage />, document.getElementById("root"));
