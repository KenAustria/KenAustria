// filename: Child-Alters-Parent.js
// to view, change this file's name to index.js
// this script works, but throws 2 errors after success.
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { parentBgColor: "#aaa" };
  }
  parentMethod = childColor => this.setState({ parentBgColor: childColor });
  render() {
    const parentDivStyle = {
      backgroundColor: this.state.parentBgColor,
      textAlign: "center"
    };
    return (
      <div style={parentDivStyle}>
        <h3>
          <Comp greeting="hello world" bgColorProp={this.parentMethod} />
        </h3>
      </div>
    );
  }
}
class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { childBgColor: this.props.bgColorProp };
  } // bgColorProp: is a non-invoked method.
  render() {
    setTimeout(
      function() {
        // initiate callback method.
        this.setState({ childBgColor: this.state.childBgColor("#dd0") });
      }.bind(this),
      1600
    );
    return (
      <div>
        <div>
          <p>{this.props.greeting}</p>
        </div>
      </div>
    );
  }
}
Comp.propTypes = { childBgColor: PropTypes.func }; // this does not fix the non-fatal errors.
Comp.defaultProps = { childBgColor: e => e }; // this does not fix the non-fatal errors.
ReactDOM.render(<App />, document.getElementById("root"));
