// filename: Bootstrap-DropDown-Menu.js
// rename index.js when using
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
const MyDropDownMenuComponent = () => (
  <div className="dropdown pt-1 mb-2">
    <button
      className="btn btn-secondary
            dropdown-toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <Link to="/" className="dropdown-item">
        Home
      </Link>
      <Link to="/my-component-one" className="dropdown-item">
        Component One
      </Link>
      <Link to="/my-component-two" className="dropdown-item">
        Component Two
      </Link>
    </div>
  </div>
);
const MyComponentHome = () => (
  <div>
    <div className="h2 mb-2">Home</div>
    <div className="h5 text-muted">
      HashRouter:&#160;&#160;
      <span className="badge badge-warning">Bootstrap</span>
      &#160;&#160;using CDNs
    </div>
  </div>
);
const MyComponentOne = () => (
  <div className="h2 mb-2 text-success">Page One</div>
);
const MyComponentTwo = () => (
  <div className="h2 mb-3 text-warning">Page Two</div>
);
const MyAppComponent = () => {
  const myContainerStyle = { minHeight: "170px", padding: "0px" };
  return (
    <HashRouter>
      <div
        className="container
                bg-dark text-white
                text-center pb-4"
        style={myContainerStyle}
      >
        <MyDropDownMenuComponent />
        <Switch>
          <Route path="/" exact component={MyComponentHome} />
          <Route path="/my-component-one" exact component={MyComponentOne} />
          <Route path="/my-component-two" component={MyComponentTwo} />
        </Switch>
      </div>
    </HashRouter>
  );
};
ReactDOM.render(<MyAppComponent />, document.getElementById("root"));
