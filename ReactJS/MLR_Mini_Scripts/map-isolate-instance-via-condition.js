// filename: map-isolate-instance-via-condition.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponent = props => {
  const myStyle = {
    maxWidth: "80%",
    margin: "0 auto 4px",
    padding: "4px 0",
    backgroundColor: "#ff7",
    border: "1px solid #000",
    borderRadius: "8px"
  };
  return (
    <div style={myStyle}>
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
      { myId: 4, myName: "Walon" },
      { myId: 5, myName: "Vicky" }
    ]
  };
  myContainerStyle = {
    maxWidth: "200px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  render() {
    let myElements = (
      <div>
        {this.state.myContactId.map(
          myCurrentItem =>
            myCurrentItem.myId !== 3 ? (
              <MyComponent
                key={myCurrentItem.myId + "x"}
                myPropsName={myCurrentItem.myName}
              />
            ) : null
        )}
      </div>
    );
    return <div style={this.myContainerStyle}>{myElements}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
