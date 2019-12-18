// filename: ref-referenced-via-props.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
//============================================================================
const MyButtonComponent = props => {
  const myButtonStyle = { marginBottom: "6px", outline: "none" };
  return (
    <button onClick={props.myInputMethodProps} style={myButtonStyle}>
      Enter the data
    </button>
  );
};
//============================================================================
const MyInputComponent = props => {
  const myInputStyle = {
    marginBottom: "6px",
    textAlign: "center",
    outline: "none"
  };
  return (
    <div>
      <input
        type="text"
        value={props.myInputValueProps}
        placeholder="Enter your name"
        ref={props.myInputElementRefProps}
        onChange={props.myInputTwoWayBindMethodProps}
        style={myInputStyle}
      />
    </div>
  );
};
//============================================================================
const MyListComponent = props => {
  const myListItemStyle = { display: "block" };
  return <li style={myListItemStyle}>{props.myNameProps}</li>;
};
//============================================================================
class MyApp extends Component {
  state = { myInputStateArray: [], myInputValue: "" };
  myInputElementRef = React.createRef();
  //----------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "260px",
    margin: "10px auto",
    padding: "4px 0 10px",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myListStyle = {
    listStyleType: "none",
    margin: "0",
    padding: "4px 0",
    backgroundColor: "#bbb",
    textAlign: "center"
  };
  myHrStyle = { margin: "0 0 6px" };
  //----------------------------------------------------------------------------
  myInputTwoWayBindMethod = props => {
    const myCurrentInputValue = this.myInputElementRef.current.value;
    this.setState({ myInputValue: myCurrentInputValue });
  };
  myInputMethod = event => {
    const myNameInputValue = this.myInputElementRef.current.value;
    const myInputStateArrayClone = [...this.state.myInputStateArray];
    myInputStateArrayClone.push({ myNameState: myNameInputValue });
    this.setState({
      myInputStateArray: myInputStateArrayClone,
      myInputValue: ""
    });
  };
  myMapListItemsMethod = props =>
    this.state.myInputStateArray[0]
      ? this.state.myInputStateArray.map((myCurrentItem, index) => (
          <MyListComponent
            key={index + myCurrentItem.myNameState}
            myNameProps={myCurrentItem.myNameState}
          />
        ))
      : "Enter a value";
  //----------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        <div>My React App</div>
        <hr style={this.myHrStyle} />
        <MyButtonComponent myInputMethodProps={this.myInputMethod} />
        <MyInputComponent
          myInputValueProps={this.state.myInputValue}
          myInputTwoWayBindMethodProps={this.myInputTwoWayBindMethod}
          myInputElementRefProps={this.myInputElementRef}
        />
        <hr style={this.myHrStyle} />
        <div>
          <ul style={this.myListStyle}>{this.myMapListItemsMethod()}</ul>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
