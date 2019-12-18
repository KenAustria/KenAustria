// filename: Router-Swap-Route-Order.js
// rename index.js when using
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
const containerStyle = {
  maxWidth: "300px",
  margin: "10px auto",
  padding: "4px 0",
  backgroundColor: "#ddd",
  textAlign: "center",
  border: "1px solid #000",
  fontSize: "16px",
  fontFamily: "Helvetica",
  fontWeight: "lighter"
};
const myListStyle = { padding: "0", listStyle: "none" };
const Home = () => {
  return (
    <Fragment>
      <h3>Home Page</h3>
      <ul style={myListStyle}>
        <li>
          <Link to="/one">Page One</Link>
        </li>
        <li>
          <Link to="/pageTwoLink/">Page Two</Link>
        </li>
      </ul>
    </Fragment>
  );
};
const PageOneComponent = props => {
  return (
    <Fragment>
      <h3>1 - Welcome to Page One</h3>
      <ul style={myListStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pageTwoLink/">Page Two</Link>
        </li>
      </ul>
    </Fragment>
  );
};
const PageTwoComponent = props => {
  return (
    <Fragment>
      <h3>2 - Welcome to Page Two</h3>
      <ul style={myListStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/one">Page One</Link>
        </li>
      </ul>
    </Fragment>
  );
};
ReactDOM.render(
  <Router>
    <div style={containerStyle}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pageTwoLink/" component={PageTwoComponent} />
        <Route path="/:myId" component={PageOneComponent} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
// If lines 48 & 49 are swapped, then, component PageTwoComponent is not accessed (not reached).
// Meaning, myId will match to="/pageTwoLink/", because ...
// variable myId will accept pageTwoLink as a match to load component PageOneComponent.
// Because, variable myId will accept (be set to, almost) whatever is after the first slash.
