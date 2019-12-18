// filename: Router-Simple.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";

const CompOne = () => <div>One</div>;
const CompTwo = () => <div>One</div>;
class App extends Component {
  containerStyle = {
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
  render() {
    return (
      <BrowserRouter>
        <div style={this.containerStyle}>
          <div>
            <NavLink to="/compOne/">Link one</NavLink>
          </div>
          <div>
            <NavLink to="/compTwo/">Link two</NavLink>
          </div>
          <Switch>
            <Route path="/compOne" component={CompOne} />
            <Route path="/compTwo" component={CompTwo} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
//<div><Link to="/compOne/">Link one</Link></div>
//<div><Link to="/compTwo/">Link two</Link></div>
