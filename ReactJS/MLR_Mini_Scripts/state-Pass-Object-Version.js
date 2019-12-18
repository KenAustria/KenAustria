// filename: state-Pass-Object-Version.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
// Local Data Source ==================================================================
const myJsonData = {
  myMainDataObject: {
    myArrayOne: [
      { id: 1, title: "Topic One", myTextColor: "#900" },
      { id: 2, title: "Topic Two", myTextColor: "#00a" },
      { id: 3, title: "Topic Three", myTextColor: "#070" }
    ]
  }
};
const MyExternalComponent = ({ myPropsDataObject }) => {
  return (
    <div style={{ color: myPropsDataObject[0].myTextColor }}>
      {myPropsDataObject[1].title}
    </div>
  );
};
// Main Output & State ====================================================================
class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStateDataObject: [],
      myInternalStateData: [
        { myInternalData: "Passing the state to a callback" }
      ]
    };
  }
  componentWillMount() {
    this.setState({ myStateDataObject: myJsonData });
  }
  //- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  MyInternalComponent = ({ myInternalStateData }) => {
    return (
      <div style={{ color: "#880", marginBottom: "6px" }}>
        {`${myInternalStateData[0].myInternalData}`}
      </div>
    );
  };
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "bold"
    };
    return (
      <div style={myContainer}>
        <div>{this.MyInternalComponent(this.state)}</div>
        <MyExternalComponent
          myPropsDataObject={
            this.state.myStateDataObject.myMainDataObject.myArrayOne
          }
        />
      </div>
    );
  }
} // ... MyInternalComponent(this.state.myInternalStateData)} ... could have been used.
ReactDOM.render(<MyData />, document.getElementById("root"));
