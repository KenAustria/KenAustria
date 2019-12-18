// filename: props-Pass-Object-Version.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Local Data Source =============================================================
const myJsonData = {
  myMainDataObject: {
    myArrayOne: [
      {
        id: "1",
        title: "Topic One",
        myTextColor: "#900"
      },
      {
        id: "2",
        title: "Topic Two",
        myTextColor: "#00a"
      },
      { id: "3", title: "Topic Three", myTextColor: "#070" }
    ]
  }
};
// Generate HTML Elements ========================================================
// place with MyExternalComponent ================================================
const myMapItems = ({ myPropsDataObject }) => {
  // props without {...} could be used.
  if (myPropsDataObject) {
    // props could be used.
    return myPropsDataObject.map(item => {
      // above: if props was used, props.myPropsDataObject would need to be used.
      return (
        <div key={item.id}>
          <div style={{ color: `${item.myTextColor}` }}>{item.title}</div>
        </div>
      );
    });
  }
};
// External Component Accessing Data ============================================
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
const MyExternalComponent = props => {
  return <div style={myContainer}>{myMapItems(props)}</div>;
};
// Main Output & State ==========================================================
class MyData extends Component {
  constructor(props) {
    super(props);
    this.state = { myStateDataObject: "" };
  }
  componentWillMount() {
    this.setState({ myStateDataObject: myJsonData });
  }
  render() {
    return (
      <div>
        <MyExternalComponent
          myPropsDataObject={
            this.state.myStateDataObject.myMainDataObject.myArrayOne
          }
        />
      </div>
    );
  }
}
ReactDOM.render(<MyData />, document.getElementById("root"));
