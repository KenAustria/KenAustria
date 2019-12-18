// IMPORTANT: since there's no default splash page, Redirect is used.
// filename: Router-Nested-Route-Redirect.js
// rename index.js when using
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as MyRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
//==================================================================================
const myContainerStyle = {
  maxWidth: "360px",
  margin: "8px auto",
  padding: "4px 0 0",
  backgroundColor: "#ddd",
  textAlign: "center",
  border: "1px solid #000",
  fontSize: "16px",
  fontFamily: "Helvetica"
};
const myH3Style = { margin: "6px" };
const myListStyle = { margin: "6px 0", padding: "0", listStyle: "none" };
//==================================================================================
const MyPostComponent = () => {
  return (
    <Fragment>
      <h3 style={myH3Style}>Post Page</h3>
      <ul style={myListStyle}>
        <li>
          <Link to="/post/my-one">Post One</Link>
        </li>
      </ul>
    </Fragment>
  );
};
const MyPostOneComponent = props => {
  const myDivStyle = { marginBottom: "6px" };
  return (
    <Fragment>
      <h3 style={myH3Style}>Post One</h3>
      <ul style={myListStyle}>
        <li>
          <Link to="/post/">Post</Link>
        </li>
      </ul>
      <div style={myDivStyle}>props.match.url is: {props.match.url}</div>
    </Fragment>
  );
};
//==================================================================================
ReactDOM.render(
  <MyRouter>
    <div style={myContainerStyle}>
      <Switch>
        <Route path="/post" exact component={MyPostComponent} />
        <Route path="/post/:myId" component={MyPostOneComponent} />
        <Redirect to="/post" push />
      </Switch>
    </div>
  </MyRouter>,
  document.getElementById("root")
);
