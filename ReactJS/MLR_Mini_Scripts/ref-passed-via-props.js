// filename: ref-passed-via-props.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";
//===============================================================================
const MyRefComponent = props => {
  const myInputStyle = {
    width: "94%",
    padding: "3px",
    fontSize: "14px",
    textAlign: "center",
    outline: "none"
  };
  //-------------------------------------------------------------------------------
  return (
    <div>
      <div ref={props.myDivElementRefProps}>Hello</div>
      <hr />
      <input
        placeholder="Original background color: white"
        ref={props.myInputElementRefProps}
        style={myInputStyle}
      />
    </div>
  );
};
//===============================================================================
class MyComponent extends React.Component {
  myDivElementRef = React.createRef();
  myInputElementRef = React.createRef();
  //-------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "360px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  //-------------------------------------------------------------------------------
  componentDidMount() {
    this.myDivElementRef.current.innerHTML =
      'This text was originally "Hello".';
    this.myInputElementRef.current.style.backgroundColor = "rgb(255,255,100)";
  }
  //-------------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyRefComponent
          myDivElementRefProps={this.myDivElementRef}
          myInputElementRefProps={this.myInputElementRef}
        />
      </div>
    );
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("root"));
