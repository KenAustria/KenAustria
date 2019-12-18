// filename: Lifecycle-shouldComponentUpdate-test.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyComponent extends Component {
  state = { myOpacity: "0.3", myText: "Not updated text" };
  //--------------------------------------------------------------------------
  myButtonStyle = {
    minWidth: "110px",
    marginBottom: "6px",
    borderRadius: "8px"
  };
  //--------------------------------------------------------------------------
  shouldComponentUpdate(nextProps, nextState) {
    //        return nextProps.myOpacityProps !== this.state.myOpacity;
    return nextProps.myOpacityProps === nextState.myOpacity;
  }
  myMethod = () => {
    this.setState({
      myOpacity: this.props.myOpacityProps,
      myText: this.props.myTextProps
    });
  };
  //--------------------------------------------------------------------------
  render() {
    const myDivStyle = {
      width: "80%",
      height: "50%",
      opacity: `${this.state.myOpacity}`,
      margin: "0 auto 8px",
      padding: "10px 0",
      backgroundColor: "#00f",
      border: "1px solid #000"
    }; // for opacity to be dynamically altered,
    // this cannot be placed inside the (above) methods area.
    return (
      <div>
        <button onClick={this.myMethod} style={this.myButtonStyle}>
          Click
        </button>
        <div style={myDivStyle} />
        <div>{this.state.myText}</div>
      </div>
    );
  }
}
class MyApp extends Component {
  state = { myOpacity: "0.8", myText: "Updated text" };
  //--------------------------------------------------------------------------
  myMainContainer = {
    maxWidth: "300px",
    minHeight: "100px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ff0",
    textAlign: "center",
    border: "1px solid #000"
  };
  //--------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myMainContainer}>
        <MyComponent
          myOpacityProps={this.state.myOpacity}
          myTextProps={this.state.myText}
        />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
