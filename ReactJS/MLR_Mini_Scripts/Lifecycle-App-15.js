// filename: Lifecycle-App-15.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props); // this "super(props)" is necessary.
    this.state = { data: 0 };
    this.setNewNumber = this.setNewNumber.bind(this);
  }
  setNewNumber() {
    this.setState({ data: this.state.data + 1 });
  } // this.state.data is 0, then add 1.
  render() {
    const myCssStyle = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myCssStyle}>
        <h3>Components Life Cycle</h3>
        <div>Lifecycle Methods, bind()</div>
        <br />
        <button onClick={this.setNewNumber}>
          Click to invoke the Lifecycle methods
        </button>
        {/* onClick: camelCase must be used in JSX.
                        clicking the button will cause more "lifecycle" methods to be invoked */}
        <NumberComponent myNumber={this.state.data} />
      </div>
    );
  }
}
class NumberComponent extends Component {
  componentDidMount() {
    document.getElementById("feedback").innerHTML +=
      "2) componentDidMount()<hr />";
  } // #2
  componentDidUpdate(prevProps, prevState) {
    document.getElementById("feedback").innerHTML +=
      "6) componentDidUpdate()<hr />";
  } // #6
  componentWillMount() {
    console.log("componentWillMount() will invoke 1st.");
  } // #1
  componentWillUnmount() {
    document.getElementById("feedback").innerHTML +=
      "7) componentWillUnmount()<br />";
  } // #7
  componentWillReceiveProps(nextProps) {
    document.getElementById("feedback").innerHTML +=
      "3) componentWillReceiveProps()<br />";
  } // #3
  componentWillUpdate(nextProps, nextState) {
    document.getElementById("feedback").innerHTML +=
      "5) componentWillUpdate()<br />";
  } // #5
  shouldComponentUpdate(nextProps, nextState) {
    document.getElementById("feedback").innerHTML +=
      "4) shouldComponentUpdate()<br />"; // #4
    return true;
  }
  render() {
    return (
      <div>
        <div id="feedback">
          Invoking order<hr />
          {"1" + String.fromCharCode(41)} componentWillMount()<hr />
        </div>
        <div>
          7{String.fromCharCode(41)} componentWillUnmount():<br />this will
          invoke in a few seconds.<hr />
        </div>
        {/* String.fromCharCode(41): is a ")".
                        setTimeout() is in the index.js file. it is set for 12 seconds. */}
        <div>{this.props.myNumber}</div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
//setTimeout(() => {ReactDOM.unmountComponentAtNode(document.getElementById('root'))}, 12000);
