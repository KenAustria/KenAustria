// filename: Router-render-Pass-props.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const MyComponentOne = () => <div>Component One</div>;
const MyComponentTwo = props => {
  const locationSearch = () => {
    const myQuery = new URLSearchParams(props.location.search);
    for (let myParam of myQuery.entries()) {
      let myBoolean = myParam[1] === "true"; // convert the string "true" into a boolean.
      if (myBoolean) {
        return myParam[0];
      } // display the (URL's) key's property name.
    }
  };
  return (
    <div>
      Component Two<br />
      {props.myProps.myArray[1].myProp2}
      <br />
      {/* accessing the whole state. */}
      {locationSearch()}
      <br />
    </div>
  );
};
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
                search: "?mySearchName=true"
              }}
            >
              Component Two
            </Link>
          </div>
          <hr />
          <Route path="/my-component-one" component={MyComponentOne} />
          <Route
            path="/my-component-two"
            render={props => <MyComponentTwo myProps={this.state} {...props} />}
          />
          <div>{this.state.myValue}</div>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
// Topic: react-router-dom's render attribute used to pass props.
// code line 51: without {...props}, only the state is accessible.
// with{...props}, history, location, match, staticContext is additionally accessible.
// so, {...props} can be optional.
//----------------------------------------------------------------------------------------
// code line 42: if changed to "false", to properly refresh, ...
//       click the "Component One" link, then click the "Component Two" link.
