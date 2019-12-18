// filename: Lifecycle-getDerivedStateFromProps-Coupling.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyDisplayComponent extends Component {
  state = { myDisplayPriceArray: [] };
  //--------------------------------------------------------------------------
  static getDerivedStateFromProps(nextProps) {
    return { myDisplayPriceArray: [...nextProps.myStateProps.myPriceArray] };
  } // this accesses the next props.
  //--------------------------------------------------------------------------
  render() {
    return <div>Price: ${this.state.myDisplayPriceArray[0].myPrice}</div>;
  }
}
class MyPriceComponent extends Component {
  state = { myPriceArray: [{ myPrice: 0 }] };
  //--------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "220px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  //--------------------------------------------------------------------------
  componentDidMount() {
    this.myMethod([{ myPrice: 6.24 }]);
  }
  myMethod = myPriceParameter => {
    this.setState({ myPriceArray: myPriceParameter });
  };
  //--------------------------------------------------------------------------
  render() {
    return (
      <div style={this.myContainerStyle}>
        <MyDisplayComponent myStateProps={this.state} />
      </div>
    );
  }
}
ReactDOM.render(<MyPriceComponent />, document.getElementById("root"));
