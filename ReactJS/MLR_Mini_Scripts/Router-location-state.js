// filename: Router-location-state.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const MyComponentOne = () => <div>Component One</div>;
class MyComponentTwo extends Component {
  locationSearch = () => {
    const myQuery = new URLSearchParams(this.props.location.search);
    for (let myParam of myQuery.entries()) {
      let myBoolean = myParam[1] === "true"; // convert the string "true" into a boolean.
      if (myBoolean) {
        return myParam[0];
      } // display the (URL's) key's property name.
    }
  };
  render() {
    return (
      <div>
        Component Two<br />
        {this.props.location.state.myArray[1].myProp2}
        <br />
        {/* accessing the whole state. */}
        {this.locationSearch()}
      </div>
    );
  }
}
class MyApp extends Component {
  state = {
    myArray: [
      { myProp1: "myProp1" },
      { myProp2: "myProp2" },
      { myProp3: "myProp3" }
    ]
  };
  render() {
    const myMainContainer = {
      maxWidth: "300px",
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
      <BrowserRouter>
        <div style={myMainContainer}>
          <div>
            <Link to="/my-component-one/">Component One</Link>
          </div>
          <div>
            <Link
              to={{
                pathname: "/my-component-two",
                hash: "#myHash",
                search: "?mySearchName=true",
                state: this.state
              }}
            >
              {/* IMPORTANT (above): state:this.state
                                If making alterations, use: state:{...state:this.state} */}
              Component Two
            </Link>
          </div>
          <hr />
          <Route path="/my-component-one" component={MyComponentOne} />
          <Route path="/my-component-two" component={MyComponentTwo} />
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
