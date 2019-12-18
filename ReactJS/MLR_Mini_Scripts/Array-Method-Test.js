// filename: Array-Method-Test.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

const MyTest = () => [...Array(3)].map(myItem => "Test "); // Test Test Test (correct).
// const MyTest = () => [Array(3)].map(myItem => "Test ");// Test (wrong).
// const MyTest = () => Array(3).map(myItem => "Test ");// empty (wrong).
// const MyTest = () => [1, 2, 3].map(myItem => "Test ");// Test Test Test (correct).
ReactDOM.render(<MyTest />, document.getElementById("root"));
