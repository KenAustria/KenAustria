// filename: prop-types-isRequired-defaultProps-External.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Content extends Component {
  myMainContainerStyle = {
    maxWidth: "440px",
    margin: "10px auto",
    padding: "0",
    backgroundColor: "#eee",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "lighter"
  };
  render() {
    return (
      <div style={this.myMainContainerStyle}>
        <div>
          <h5>prop-types, isRequired, defaultProps</h5>
          <div>{this.props.mySubtitle}</div>
        </div>
        <div>
          <hr />
          <div>Array: {this.props.propArray}</div>
          <div>Boolean: {this.props.propBoolean ? "True" : "False"}</div>
          {/*the ternary must be used.*/}
          <div>Function: {this.props.propFunction("I was returned.")}</div>
          <div>Number: {this.props.propNumber}</div>
          <div>String: {this.props.propString}</div>
          <div>Object: {this.props.propObject.myObjectName1}</div>
          <div>Object: {this.props.propObject.myObjectName2}</div>
          <div>Object: {this.props.propObject.myObjectName3}</div>
        </div>
      </div>
    );
  }
}
Content.propTypes = {
  propArray: PropTypes.array.isRequired,
  propBoolean: PropTypes.bool.isRequired,
  propFunction: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
}; // prop-types: is a ReactJS native class.
// this (above) object content initializes its properties (also, it validates).
// propTypes: this protects the script, so only the proper datatypes are configured.
// propArray: is a newly created array that is (optional but desired to be) required.
// a "warning" (not an "error") is thrown (in the console), if it is not used.
// propBool: is a newly created boolean that is (optional but desired to be) required.
// PropTypes: is like a JSX class & "Func" is a property of that class.
Content.defaultProps = {
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
}; // this (above) object content sets values to the initialized properties.
ReactDOM.render(<Content />, document.getElementById("root"));
