// filename: Lifecycle-render-DOM-Alteration.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  myCount = 0;
  myDivRef = React.createRef();
  mainContainerStyle = {
    maxWidth: "440px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  componentDidMount() {
    const myDivReference = this.myDivRef.current;
    myDivReference.innerHTML = 0;
    let myValue = myDivReference.innerHTML;
    myDivReference.innerHTML = 0;
    const myInterval = setInterval(() => {
      if (myValue <= 19) {
        myValue = parseInt(myValue, 10) + 1;
        myDivReference.innerHTML = myValue;
      } else {
        clearInterval(myInterval);
      }
    }, 1000);
  }
  componentDidUpdate() {
    let myCduCount = 0;
    console.log("componentDidUpdate count: ", myCduCount++);
    // this will not display anything, because,
    // componentDidUpdate() doesn't invoke.
  }
  render() {
    this.myCount++; // this proves myCount is able to increment.
    return (
      <div style={this.mainContainerStyle}>
        <div ref={this.myDivRef}>Waiting...</div>
        <hr />
        <span>{this.myCount++}: </span>
        If this number increments higher than one,<br />
        then the render() method is invoking each time<br />
        the above number increments.<hr />
        <b>Conclusion</b>: an updating DOM element doesn't<br />
        always force the render() method to invoke.
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
// even thought the inner <div> element is being updated,
// the render() method only invokes once.
