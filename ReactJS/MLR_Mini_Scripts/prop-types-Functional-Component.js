// filename: prop-types-Functional-Component.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const MyContent = props => {
  const myMainContainerStyle = {
    maxWidth: "460px",
    margin: "10px auto",
    padding: "4px 0 0",
    backgroundColor: "#eee",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  return (
    <div style={myMainContainerStyle}>
      <div>
        <h5>prop-types, isRequired, defaultProps</h5>
        <div>{props.mySubtitle}</div>
      </div>
      <div>
        <hr />
        <div>Array: {props.propArray}</div>
        <div>Boolean: {props.propBoolean ? "True" : "False"}</div>
        {/*the ternary must be used.*/}
        <div>Function: {props.propFunction("I was returned.")}</div>
        <div>Number: {props.propNumber}</div>
        <div>String: {props.propString}</div>
        <div>Object: {props.propObject.myObjectName1}</div>
        <div>Object: {props.propObject.myObjectName2}</div>
        <div>Object: {props.propObject.myObjectName3}</div>
      </div>
    </div>
  );
};
MyContent.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBoolean: PropTypes.bool.isRequired,
  propFunction: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
};
MyContent.defaultProps = {
  propArray: ["One", "Two", "Three"],
  propBoolean: true,
  propFunction: e => e,
  propNumber: 777,
  propString: "I am a string.",
  propObject: {
    myObjectName1: "Object One",
    myObjectName2: "Object Two",
    myObjectName3: "Object Three"
  }
}; // this (above) object MyContent sets values to the initialized properties.
ReactDOM.render(<MyContent />, document.getElementById("root"));
