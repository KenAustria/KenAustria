// filename: LocalStorage-componentDidMount-Add-New-Object.js
// filename: when using, rename to index.js
import React from "react";
import ReactDOM from "react-dom";
class MyLocalStorage extends React.Component {
  myAddLsCharMethod() {
    // add new data.
    let myTvCharsObj2 = [];
    myTvCharsObj2.push(
      '{"myTitle": "Star Wars", "myFirstName": "Luke", "myLastName": "Skywalker"}'
    );
    let myNewTvCharStrfy = JSON.stringify(myTvCharsObj2);
    localStorage.setItem("myTvCharsObj2", myNewTvCharStrfy);
    //------------------------------------------------------ get & print current (updated) data.
    let myTvCharObject = JSON.parse(localStorage.getItem("myTvCharsObj2"));
    for (let myI = 0; myI < myTvCharObject.length; myI++) {
      let myTvCharObjParse = JSON.parse(localStorage.getItem("myTvCharsObj2"))[
        myI
      ];
      let myTvCharPropsParse = JSON.parse(myTvCharObjParse);
      document.getElementById("myDivElement").innerHTML +=
        myTvCharPropsParse.myTitle +
        ": " +
        myTvCharPropsParse.myFirstName +
        "<br>";
    }
  }
  componentDidMount() {
    //===================================================== set the original data.
    let myTvCharsObj1 = [];
    myTvCharsObj1.push(
      '{"myTitle": "Simpsons", "myFirstName": "Homer", "myLastName": "Simpson"}',
      '{"myTitle": "Family Guy", "myFirstName": "Peter", "myLastName": "Griffen"}',
      '{"myTitle": "Batman", "myFirstName": "Bruce", "myLastName": "Wayne"}'
    );
    let myTvCharStrfy = JSON.stringify(myTvCharsObj1);
    localStorage.setItem("myTvCharsObj1", myTvCharStrfy);
    //------------------------------------------------------ get & print current data.
    let myTvCharObject = JSON.parse(localStorage.getItem("myTvCharsObj1"));
    for (let i = 0; i < myTvCharObject.length; i++) {
      let myTvCharObjParse = JSON.parse(localStorage.getItem("myTvCharsObj1"))[
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
  render() {
    const myMainContainer = {
      maxWidth: "400px",
      minHeight: "140px",
      margin: "0 auto",
      padding: "6px",
      backgroundColor: "#ffa",
      textAlign: "center",
      border: "1px solid #000"
    };
    const myButton = { margin: "0 0 6px 0" };
    return (
      <div style={myMainContainer}>
        <div>Add a New Object into Local Storage</div>
        <hr />
        <button type="button" onClick={this.myAddLsCharMethod} style={myButton}>
          Add the new character and display all
        </button>
        <div id="myDivElement" />
      </div>
    );
  }
}
ReactDOM.render(<MyLocalStorage />, document.getElementById("root"));
