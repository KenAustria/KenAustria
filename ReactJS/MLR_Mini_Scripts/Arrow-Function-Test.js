// filename: Arrow-Function-Test.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class QuizOptions extends Component {
  render() {
    return <div>Quiz options{this.props.children}</div>;
  }
}
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { myStateProperty: "I have state access." };
    //        this.renderOptions = this.renderOptions.bind(this);
  }
  renderOptions(myIndicator) {
    console.log(this); // Use this to study what "this" is.
    return (
      <QuizOptions>
        {" "}
        {myIndicator}: {this.state.myStateProperty}
      </QuizOptions>
    );
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
        Three tests:<br />
        {this.renderOptions(1)}
        {/* #1) Works. */}
        {() => this.renderOptions(2)}
        {/* #2) Requires an event to invoke. See the button. */}
        <button onClick={() => this.renderOptions(3)}>Play Again</button>
        {/* #3) above: Invokes. Has state access. Connot replace the button.
                            Meaning, it can't render to the DOM. This must be a ReactJS thing.
                        */}
      </div>
    );
  }
}
ReactDOM.render(<Quiz />, document.getElementById("root"));
