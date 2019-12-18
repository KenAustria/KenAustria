// filename: Router-props-match-url-1.js
// rename index.js when using
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const myListStyle = { padding: "0", listStyle: "none" };
const Home = () => <h3>Home Page</h3>;
const SubOne = () => <h5>Sub 1</h5>;
const SubTwo = () => <h5>Sub 2</h5>;
const MyRouter = props => {
  return (
    <div>
      <ul style={myListStyle}>
        <li>
          <Link to={props.match.url + "/sub-one"}>Sub 1</Link>
        </li>
        <li>
          <Link to={props.match.url + "/sub-two"}>Sub 2</Link>
        </li>
      </ul>
      <Route path={props.match.url + "/sub-one"} component={SubOne} />
      <Route path={props.match.url + "/sub-two"} component={SubTwo} />
    </div>
  );
};
const PageOne = props => {
  return (
    <Fragment>
      <h3>Page One</h3>
      <MyRouter {...props} />
    </Fragment>
  );
};
const PageTwo = props => {
  return (
    <Fragment>
      <h3>Page Two</h3>
      <MyRouter {...props} />
    </Fragment>
  );
};
const MyApp = () => {
  const containerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "4px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  return (
    <BrowserRouter>
      <div style={containerStyle}>
        <ul style={myListStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-one">Page One</Link>
          </li>
          <li>
            <Link to="/page-two">Page Two</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/page-two" component={PageTwo} />
          <Route path="/page-one" component={PageOne} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
ReactDOM.render(<MyApp />, document.getElementById("root"));
