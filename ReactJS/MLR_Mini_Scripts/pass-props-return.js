// filename: pass-props-return.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";

const ComponentOne = () => (
  <div
    style={{
      padding: "4px",
      backgroundColor: "#ff6",
      borderTop: "1px solid #000"
    }}
  >
    Component One
  </div>
);
const ComponentTwo = () => (
  <div
    style={{
      padding: "4px",
      backgroundColor: "#cfc",
      borderTop: "1px solid #000"
    }}
  >
    Component Two
  </div>
);
const PlaceHolderComponent = myProps => {
  // passing in the props object (true/false).
  const myComponentSwitch = myProps.myPropComponentSwitch; // this is mandatory.
  if (myComponentSwitch) {
    return <ComponentOne />;
  }
  return <ComponentTwo />;
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myBoolean: true, myCount: 0 };
  }
  componentDidMount() {
    // this is the coder's first method to invoke.
    this.myInterval = setInterval(() => {
      if (this.state.myBoolean && this.state.myCount < 9) {
        this.setState({ myBoolean: false, myCount: this.state.myCount + 1 });
        return true;
      } else if (!this.state.myBoolean && this.state.myCount < 9) {
        this.setState({ myBoolean: true, myCount: this.state.myCount + 1 });
        return false;
      } else {
        clearInterval(this.myInterval);
      }
    }, 1000);
  }
  myForceReload() {
    window.location.reload();
  }
  render() {
    const myMainContainer = {
      maxWidth: "440px",
      margin: "10px auto",
      padding: "0",
      backgroundColor: "#eee",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myMainContainer}>
        <div style={{ padding: "8px 0", fontWeight: "normal" }}>
          Two components are toggling via&#160;
          <span style={{ color: "#a00", fontWeight: "bold" }}>
            passing Props
          </span>
          <br />an&#160;
          <span style={{ color: "#a00", fontWeight: "bold" }}>
            if statement
          </span>
          &#160;and&#160;
          <span style={{ color: "#a00", fontWeight: "bold" }}>
            return statements
          </span>
        </div>
        <PlaceHolderComponent myPropComponentSwitch={this.state.myBoolean} />
        {/* the above component is replaced by the returned component */}
        <div style={{ padding: "8px 0", borderTop: "1px solid #000" }}>
          <button onClick={this.myForceReload}>Reload this webpage</button>&#160;&#160;
          <a
            href="project-files.zip"
            download="project-files.zip"
            style={{ color: "#a00" }}
          >
            Download this app's project files
          </a>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
