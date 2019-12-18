// filename: Router-props-location-hash-search.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";

const myExternalProcessor = props => {
  const myHash = props.location.hash;
  let mySearchValue = "";
  const mySearch = new URLSearchParams(props.location.search);
  for (let myParam of mySearch.entries()) {
    mySearchValue = myParam[1];
  }
  return [myHash, mySearchValue];
};
const MyComponentPink = props => {
  const myPinkBgd = { padding: "6px 0", backgroundColor: "#fac" };
  const myDataArray = myExternalProcessor(props);
  return (
    <div style={myPinkBgd}>
      {myDataArray[0]}
      {" & "}
      {myDataArray[1]}
    </div>
  );
};
const MyComponentGreen = props => {
  const myGreenBgd = { padding: "6px 0", backgroundColor: "#5e9" };
  const myDataArray = myExternalProcessor(props);
  return (
    <div style={myGreenBgd}>
      {myDataArray[0]}
      {" & "}
      {myDataArray[1]}
    </div>
  );
};
const MyComponentBlue = props => {
  const myBlueBgd = { padding: "6px 0", backgroundColor: "#9bf" };
  const myDataArray = myExternalProcessor(props);
  return (
    <div style={myBlueBgd}>
      {myDataArray[0]}
      {" & "}
      {myDataArray[1]}
    </div>
  );
};
class App extends Component {
  render() {
    const myContainer = {
      maxWidth: "360px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const linkStyle = {
      display: "inline-block",
      width: "80%",
      margin: "0 auto 6px",
      padding: "6px",
      border: "1px solid #000",
      borderRadius: "10px",
      backgroundColor: "#777",
      color: "#fff",
      textDecoration: "none"
    };
    const ulStyle = {
      width: "100%",
      margin: "0",
      padding: "0",
      listStyle: "none",
      textAlign: "center"
    };
    const liStyle = { display: "inline-block", margin: "0 4px 10px" };
    return (
      <div style={myContainer}>
        <div>
          <a
            href="project-files.zip"
            download="project-files.zip"
            style={linkStyle}
          >
            Download this app's project files
          </a>
        </div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link
              to={{
                pathname: "/pink",
                hash: "#pink-hash",
                search: "?my-search=pink-color"
              }}
            >
              Pink
            </Link>
          </li>
          <li style={liStyle}>
            <Link
              to={{
                pathname: "/green",
                hash: "#green-hash",
                search: "?my-search=green-color"
              }}
            >
              Green
            </Link>
          </li>
          <li style={liStyle}>
            <Link
              to={{
                pathname: "/blue",
                hash: "#blue-hash",
                search: "?my-search=blue-color"
              }}
            >
              Blue
            </Link>
          </li>
        </ul>
        <Switch>
          <Route path="/pink" component={MyComponentPink} />
          <Route path="/green" component={MyComponentGreen} />
          <Route path="/blue" component={MyComponentBlue} />
        </Switch>
      </div>
    );
  }
}
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
