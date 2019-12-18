// Interactive Form Select Option with Conditions.
// filename: form-interactive-select-option-conditions.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

const mySelectionObjects = {
  mySelectionObj0: [{ myObjValue: "Choose second" }],
  mySelectionObj1: [
    { myObjValue: "Choose" },
    { myObjValue: "A" },
    { myObjValue: "B" },
    { myObjValue: "C" }
  ],
  mySelectionObj2: [
    { myObjValue: "Choose" },
    { myObjValue: "D" },
    { myObjValue: "E" },
    { myObjValue: "F" }
  ],
  mySelectionObj3: [
    { myObjValue: "Choose" },
    { myObjValue: "G" },
    { myObjValue: "H" },
    { myObjValue: "I" }
  ]
};
const MyCategory = props => {
  return (
    <label htmlFor="myCategoryId">
      <span>Category: </span>
      <select
        value={props.myCurrentCatValue}
        onChange={props.myOnChange}
        id="myCategoryId"
      >
        <option value="0">Choose first</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </label>
  );
};
const MySelection = props => {
  let myCurrentObject = "";
  switch (props.myCurrentCatValue) {
    case "1":
      myCurrentObject = mySelectionObjects.mySelectionObj1;
      break;
    case "2":
      myCurrentObject = mySelectionObjects.mySelectionObj2;
      break;
    case "3":
      myCurrentObject = mySelectionObjects.mySelectionObj3;
      break;
    default:
      myCurrentObject = mySelectionObjects.mySelectionObj0;
  }
  return (
    <label htmlFor="mySelectionId">
      <span>Selection: </span>
      <select
        value={props.myCurrentSelValue}
        onChange={props.myOnChange}
        id="mySelectionId"
      >
        {myCurrentObject.map((myItem, index) => (
          <option key={index} value={myItem.myObjValue}>
            {myItem.myObjValue}
          </option>
        ))}
      </select>
    </label>
  );
};
class Search extends React.Component {
  state = {
    myCategoryValue: { myValue: "0" },
    mySelectionValue: { myValue: "Choose" }
  };
  MyCategoryChange = event => {
    const myCatValClone = { ...this.state.myCategoryValue };
    myCatValClone.myValue = event.target.value;
    const mySelValClone = { ...this.state.mySelectionValue };
    mySelValClone.myValue = "Choose";
    this.setState({
      myCategoryValue: myCatValClone,
      mySelectionValue: mySelValClone
    });
  };
  MySelectionChange = event => {
    const mySelValClone = { ...this.state.mySelectionValue };
    mySelValClone.myValue = event.target.value;
    this.setState({ mySelectionValue: mySelValClone });
  };
  render() {
    const myContainer = {
      maxWidth: "320px",
      minHeight: "70px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        <div>
          Interactive Form Select Option<br />with Conditions
        </div>
        <hr />
        <div>
          <form>
            <MyCategory
              myCurrentCatValue={this.state.myCategoryValue.myValue}
              myOnChange={this.MyCategoryChange}
            />
          </form>
        </div>
        <hr />
        <div>
          <MySelection
            myCurrentCatValue={this.state.myCategoryValue.myValue}
            myCurrentSelValue={this.state.mySelectionValue.myValue}
            myOnChange={this.MySelectionChange}
          />
          <hr />
        </div>
        <div>
          You chose:{" "}
          {this.state.mySelectionValue.myValue === "Choose"
            ? "Waiting..."
            : this.state.mySelectionValue.myValue}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Search />, document.getElementById("root"));
