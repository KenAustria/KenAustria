// filename: event-backgroundColor-Toggle.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyListComponent = props => {
  const myListStyle = {
    maxWidth: "90%",
    margin: "6px auto",
    padding: "6px 0",
    backgroundColor: "#ff0",
    border: "1px solid #000",
    boxShadow: "0 2px 3px #555",
    borderRadius: "10px"
  };
  const myItemStyle = {
    maxWidth: "90%",
    margin: "6px auto",
    padding: "6px 0",
    backgroundColor: "rgb(238, 238, 238)",
    border: "1px solid #000",
    boxShadow: "0 2px 3px #555",
    borderRadius: "10px"
  };
  const myMethod = event => {
    console.log(event.target.textContent);
    let myCurrentColor = event.target.style.backgroundColor;
    myCurrentColor === "rgb(238, 238, 238)"
      ? (event.target.style.backgroundColor = "rgb(255, 150, 200)")
      : (event.target.style.backgroundColor = "rgb(238, 238, 238)");
  };
  const myListDom = (
    <div>
      {props.myListProps.map(myCurrentItem => (
        <div
          key={myCurrentItem.id + myCurrentItem.name}
          onClick={myMethod}
          style={myItemStyle}
        >
          {myCurrentItem.name}
        </div>
      ))}
    </div>
  );
  return (
    <div style={myListStyle}>
      <div>Click a name. See the console.</div>
      {myListDom}
    </div>
  );
};
class MyApp extends Component {
  state = {
    myList: [
      { id: 1, name: "Max" },
      { id: 2, name: "Alyson" },
      { id: 3, name: "Jill" }
    ]
  };
  myContainerStyle = {
    maxWidth: "380px",
    margin: "10px auto 0",
    padding: "6px 0",
    backgroundColor: "#bbb",
    textAlign: "center",
    border: "1px solid #000"
  };
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyListComponent myListProps={this.state.myList} />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
