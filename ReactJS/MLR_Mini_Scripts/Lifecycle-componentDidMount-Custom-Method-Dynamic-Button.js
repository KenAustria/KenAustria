// filename: Lifecycle-componentDidMount-Custom-Method-Dynamic-Button.js
// filename: when using, rename to index.js
import React from "react";
import ReactDOM from "react-dom";

class MyIndexJs extends React.Component {
  componentDidMount() {
    var myMethod = function() {
      document.getElementById("myDiv").textContent += " ReactJs";
    };
    var myBtnElement = document.createElement("input");
    myBtnElement.type = "button"; //Assign different attributes to the element.
    myBtnElement.value = "Click me";
    myBtnElement.name = "myButtonName";
    myBtnElement.onclick = function() {
      myMethod();
    };
    var myButtonElement = document.getElementById("myButtonDiv");
    myButtonElement.appendChild(myBtnElement); //Append the element in page (in span).
  }
  render() {
    return (
      <div>
        <div id="myButtonDiv" />
        <div id="myDiv">Hello</div>
      </div>
    );
  }
}
ReactDOM.render(<MyIndexJs />, document.getElementById("root"));
