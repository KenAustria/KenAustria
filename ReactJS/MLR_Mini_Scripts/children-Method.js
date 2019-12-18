// filename: children-Method.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

const MyIterateComponent = props => {
  const myItems = [];
  for (let i = 0; i < props.myNumTimes; i++) {
    myItems.push(props.children(i));
  }
  return <div>{myItems}</div>;
}; // children is a method.
const MyApp = () => {
  const myContainerStyle = {
    maxWidth: "240px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  return (
    <div style={myContainerStyle}>
      <MyIterateComponent myNumTimes={4}>
        {myForLoopIndex => (
          <div key={myForLoopIndex}>Item {myForLoopIndex} of the list</div>
        )}
      </MyIterateComponent>
    </div>
  );
};
ReactDOM.render(<MyApp />, document.getElementById("root"));
// https://reactjs.org/docs/jsx-in-depth.html#functions-as-children
