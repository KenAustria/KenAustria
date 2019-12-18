// filename: Router-props-match-url-2.js
// rename index.js when using
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const containerStyle = {
  maxWidth: "360px",
  margin: "10px auto",
  padding: "4px 0 0",
  backgroundColor: "#ddd",
  textAlign: "center",
  border: "1px solid #000",
  fontSize: "16px",
  fontFamily: "Helvetica"
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
      </ul>
      <ul style={myListStyle}>
        <li>
          <Link to="/myPageTwoComp">Page Two</Link>
        </li>
      </ul>
    </Fragment>
  );
};
const PageOneComponent = props => {
  return (
    <Fragment>
      <h3>Welcome to Page One</h3>
      <div>props.match.url is: {props.match.url}</div>
      <ul style={myListStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </Fragment>
  );
};
const PageTwoComponent = props => {
  return (
    <Fragment>
      <h3>Welcome to Page Two</h3>
      <div>props.match.url is: {props.match.url}</div>
      <ul style={myListStyle}>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </Fragment>
  );
};
ReactDOM.render(
  <Router>
    <div style={containerStyle}>
      <Route path="/:myId" exact component={PageOneComponent} />
      <Route path="/myPageTwoComp" exact component={PageTwoComponent} />
      <Route path="/" exact component={Home} />
    </div>
  </Router>,
  document.getElementById("root")
);
// props.match.url is the <Link>'s "to" value, of what was clicked to get to that component.
// so, if multiple components load, they all have the same "to" value (via props.match.url).
// :myId can be anything, but myPageTwoComp is specific.
// since :myId can be anything, then applying "exact" is redundant.
