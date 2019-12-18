// filename: Code-Snippet-Display.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyCodeSnippetComponent = props => {
  return (
    <div style={props.MyCodeSnippetComponentStyleProps}>
      <pre>
        {`class FactorialExample {
    public static void main(String args[]) {
        int i,fact=1;
        int number=5;//It is the number to calculate factorial
        for(i=1;i<=number;i++) {
            fact = fact * i;
        }
        System.out.println("Factorial of "+number+" is: "+fact);
    }
}`}
      </pre>
    </div>
  );
};
class MyApp extends Component {
  myMainContainerStyle = {
    maxWidth: "500px",
    margin: "10px auto 0",
    padding: "6px 0",
    backgroundColor: "#bbb",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  MyCodeSnippetComponentStyle = {
    maxWidth: "94%",
    margin: "0 auto",
    padding: "10px 0 0 10px",
    backgroundColor: "#eee",
    textAlign: "left",
    border: "1px solid #000",
    fontSize: "12px"
  };
  //---------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myMainContainerStyle}>
        <div>
          <b>Code Snippet:</b> Language; C
        </div>
        <MyCodeSnippetComponent
          MyCodeSnippetComponentStyleProps={this.MyCodeSnippetComponentStyle}
        />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
