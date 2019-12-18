// filename: Router-Link-CSS-Styles.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

const CompOne = () => <div>One</div>;
const CompTwo = () => <div>Two</div>;
class App extends Component {
  containerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "8px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica",
    fontWeight: "normal"
  };
  myLinkStyle = {
    display: "inline-block",
    margin: "0 auto 6px",
    padding: "4px 8px",
    backgroundColor: "#ff0",
    border: "1px solid #480",
    borderRadius: "8px",
    color: "#480",
    fontSize: "20px",
    fontWeight: "bold"
  };
  render() {
    return (
      <BrowserRouter>
        <div style={this.containerStyle}>
          <div>
            <Link to="/compOne/" style={this.myLinkStyle}>
              CSS Link Styles
            </Link>
          </div>
          <div>
            <Link to="/compTwo/">Default Link Styles</Link>
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
