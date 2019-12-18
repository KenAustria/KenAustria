// filename: map-isolate-instance-via-condition-CSS.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponent = props => {
  return (
    <div style={props.myStyleProps}>
      <div>{props.myPropsName}</div>
    </div>
  );
};
class App extends Component {
  state = {
    myContactId: [
      { myId: 1, myName: "Zac" },
      { myId: 2, myName: "Yvon" },
      { myId: 3, myName: "Xavier" },
      { myId: 5, myName: "Vicky" }
    ]
  };
  myContainerStyle = {
    maxWidth: "200px",
    margin: "10px auto 0",
    padding: "10px 0 4px",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  myComponentStyle = {
    maxWidth: "80%",
    margin: "0 auto 4px",
    padding: "4px 0",
    backgroundColor: "#ff7",
    border: "1px solid #000",
    borderRadius: "8px"
  };
  myComponentUniqueStyle = {
    maxWidth: "80%",
    margin: "0 auto 4px",
    padding: "4px 0",
    backgroundColor: "#5f5",
    border: "1px solid #000",
    borderRadius: "8px"
  };
  render() {
    let myElements = (
      <div>
        {this.state.myContactId.map(myCurrentItem => {
          return (
            <MyComponent
              key={myCurrentItem.myId + "x"}
              myPropsName={myCurrentItem.myName}
              myStyleProps={
                myCurrentItem.myId !== 3
                  ? this.myComponentStyle
                  : this.myComponentUniqueStyle
              }
            />
          );
        })}
      </div>
    );
    return <div style={this.myContainerStyle}>{myElements}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
