// filename: prototype-vanilla-JavaScript.js
// to view, change this file's name to index.js.
import React from "react";
import ReactDOM from "react-dom";

class MyClass extends React.Component {
  myContainer = {
    position: "relative",
    maxWidth: "280px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  //-------------------------------------------------------------------------------------
  myProperty = "I am a Property";
  myEs5Method() {
    return "I am an ES5 method";
  }
  myEs6Method = () => "I am an ES6 arrow method";
  //-------------------------------------------------------------------------------------
  render() {
    return <div style={this.myContainer}>prototype: see the console</div>;
  }
}
let myClassInstance = new MyClass();
console.log(myClassInstance.myEs5Method()); // I am an ES5 method
console.log(myClassInstance.myEs6Method()); // I am an ES6 arrow method
// Above, class arrow methods can be accessed.
//-------------------------------------------------------------------------------------
console.log("constructor(): ", myClassInstance.constructor());
// Above, Inside the hidden constructor, myEs5Method is missing.
// ES5 methods originating inside the class, are placed inside its prototype.
//-------------------------------------------------------------------------------------
console.log("constructor.prototype: ", myClassInstance.constructor.prototype);
// Above, Inside the prototype, myEs6Method is missing.
// Arrow functions originating inside the class, are not inside its prototype.
// Arrow functions originating inside the class, are inside its hidden constructor.
//-------------------------------------------------------------------------------------
console.log("prototype access: ", MyClass.prototype);
// myClassInstance.constructor.prototype is MyClass.prototype.
//-------------------------------------------------------------------------------------
MyClass.prototype.myPrototypeMethod = function() {
  return "AAA: " + this.myProperty;
};
console.log(myClassInstance.myPrototypeMethod());
// Above, AAA: I am a Property
// Setting an ES5 function inside the prototype is good.
//-------------------------------------------------------------------------------------
MyClass.prototype.myPrototypeArrowMethod = () => "BBB: " + this.myProperty;
console.log(myClassInstance.myPrototypeArrowMethod());
// Above, BBB: undefined
// In the prototype, myPrototypeArrowMethod is available (proof: BBB).
// The arrow method cannot access its static property (proof: undefined).
// An arrow function is problematic, due to 'this' not connecting to the class.
// Setting an arrow function inside the prototype can be problematic ('this').
//-------------------------------------------------------------------------------------
console.log(MyClass.prototype.myPrototypeArrowMethod());
// Same results as (above) myClassInstance.myPrototypeArrowMethod().
ReactDOM.render(<MyClass />, document.getElementById("root"));
