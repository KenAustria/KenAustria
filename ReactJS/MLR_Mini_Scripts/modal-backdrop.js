// filename: modal-backdrop.js
// this file must be named index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//=================================================================================
const MyBackdropComponent = props => {
  const myBackdropStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "100",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)"
  };
  //---------------------------------------------------------------------------------
  return props.myModalStatusProps ? (
    <div style={myBackdropStyle} onClick={props.myCloseModalProps} />
  ) : null;
};
//=================================================================================
const MyModalComponent = props => {
  const myModalStyle = {
    position: "fixed",
    top: "10%",
    left: "auto",
    zIndex: "500",
    minWidth: "200px",
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "16px 0",
    backgroundColor: "#fff",
    border: "1px solid #000",
    boxShadow: "1px 1px 1px #999",
    transition: "all 0.3s ease-out",
    transform: props.myModalStatusProps
      ? "translateY(0)"
      : "translateY(-100vh)",
    opacity: props.myModalStatusProps ? "1" : "0"
  };
  //---------------------------------------------------------------------------------
  return (
    <Fragment>
      <MyBackdropComponent
        myModalStatusProps={props.myModalStatusProps}
        myCloseModalProps={props.myCloseModalProps}
      />
      <div style={myModalStyle}>{props.children}</div>
    </Fragment>
  );
};
//=================================================================================
class MyApp extends Component {
  state = { myModalStatus: false };
  //---------------------------------------------------------------------------------
  myContainerStyle = {
    position: "relative",
    zIndex: "5",
    maxWidth: "300px",
    minHeight: "120px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#eee",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  //---------------------------------------------------------------------------------
  myCloseModalMethod = () => this.setState({ myModalStatus: false });
  //---------------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyModalComponent
          myModalStatusProps={this.state.myModalStatus}
          myCloseModalProps={this.myCloseModalMethod}
        >
          <div>Click</div>
          <div>on the</div>
          <div>gray area</div>
        </MyModalComponent>
        <button onClick={() => this.setState({ myModalStatus: true })}>
          Click to open the modal
        </button>
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
