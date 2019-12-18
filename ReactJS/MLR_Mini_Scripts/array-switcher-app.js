// filename: array-switcher-app.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const MyComponentStyle = {
  marginBottom: "8px",
  padding: "6px 0",
  backgroundColor: "#ff0"
};
const ComponentOne = props => {
  return (
    <div
      onClick={() => props.MyClickedComponent("myComp1", props.myKey)}
      style={MyComponentStyle}
    >
      {props.myName}
    </div>
  );
};
const ComponentTwo = props => {
  return (
    <div
      onClick={() => props.MyClickedComponent("myComp2", props.myKey)}
      style={MyComponentStyle}
    >
      {props.myName}
    </div>
  );
};
class App extends Component {
  state = {
    myArrayOne: [
      { myName: "Max", myKey: 123 },
      { myName: "Chloe", myKey: 321 },
      { myName: "Bella", myKey: 213 }
    ],
    myArrayTwo: [
      { myName: "Samuel", myKey: 312 },
      { myName: "Angela", myKey: 231 }
    ]
  };
  MyClickedComponent = (myComp, myClickId) => {
    let myStateArray = [];
    myComp === "myComp1"
      ? (myStateArray = this.state.myArrayOne)
      : (myStateArray = this.state.myArrayTwo);
    // above: if ComponentOne, then use state.myArrayOne, else use state.myArrayTwo.
    const myArrayIndex = myStateArray.findIndex(p => p.myKey === myClickId);
    // above: get the index # of the clicked-on item.
    const myArrayClone = [...myStateArray];
    const myArrayItemObjectClone = { ...myStateArray[myArrayIndex] };
    const myRemainingItems = myArrayClone.filter(
      myItem => myItem.myKey !== myArrayItemObjectClone.myKey
    );
    //------------------------------------------------------------------------------
    let myOtherStateArray = []; // the array that wasn't clicked on.
    myComp === "myComp1"
      ? (myOtherStateArray = this.state.myArrayTwo)
      : (myOtherStateArray = this.state.myArrayOne);
    // above: if ComponentOne, then use state.myArrayTwo, else use state.myArrayOne.
    const myOtherArrayClonePlus = [
      ...myOtherStateArray,
      myArrayItemObjectClone
    ];
    // above: add the clicked-on item to the other array (of objects).
    //------------------------------------------------------------------------------
    myComp === "myComp1"
      ? this.setState({
          myArrayOne: myRemainingItems,
          myArrayTwo: myOtherArrayClonePlus
        })
      : this.setState({
          myArrayOne: myOtherArrayClonePlus,
          myArrayTwo: myRemainingItems
        });
    // above: if ComponentOne, 1:remove then 2:add, else, 1:add then 2:remove.
  };
  render() {
    const MyComponentOne = this.state.myArrayOne.map(myItem => (
      <ComponentOne
        key={myItem.myKey}
        myName={myItem.myName}
        myKey={myItem.myKey}
        MyClickedComponent={this.MyClickedComponent}
      />
    ));
    const MyComponentTwo = this.state.myArrayTwo.map(myItem => (
      <ComponentTwo
        key={myItem.myKey}
        myName={myItem.myName}
        myKey={myItem.myKey}
        MyClickedComponent={this.MyClickedComponent}
      />
    ));
    const containerStyle = {
      maxWidth: "320px",
      margin: "10px auto",
      padding: "8px 0 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    const myLine = {
      height: "1px",
      marginBottom: "8px",
      backgroundColor: "#000"
    };
    return (
      <div style={containerStyle}>
        Click randomly in the yellow areas<hr />
        {MyComponentOne}
        <div style={myLine} />
        {MyComponentTwo}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
