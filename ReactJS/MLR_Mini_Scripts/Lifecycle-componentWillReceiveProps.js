// filename: Lifecycle-componentWillReceiveProps.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStateData: "Original state text.",
      myPropsData: "Original props text."
    };
    this.myForceReload = this.myForceReload.bind(this);
  }
  componentDidMount() {
    document.getElementById("myDiv1").innerHTML = "componentDidMount() fired.";
    this.mySetTimeout = setTimeout(() => {
      // this.mySetTimeout =: the "this" is necessary.
      this.setState({
        myStateData: "State has been altered.",
        myPropsData: "componentWillReceiveProps() fired."
      });
    }, 3000);
  }
  myForceReload() {
    window.location.reload();
  }
  render() {
    const myContainer = {
      maxWidth: "460px",
      margin: "10px auto",
      paddingBottom: "10px",
      backgroundColor: "#ff9",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <div style={myContainer}>
        <h3>ReactJS - Lifecycle - componentWillReceiveProps()</h3>
        <div>
          <button onClick={this.myForceReload}>Reload this webpage</button>&#160;&#160;
          <a
            href="project-files.zip"
            download="project-files.zip"
            style={{ color: "#a00" }}
          >
            Download this app's project files
          </a>
        </div>
        <hr />
        <div id="myDiv1" />
        <div>{this.state.myStateData}</div>
        <MyPropsComponent myPropsInfo={this.state.myPropsData} />
      </div>
    );
  }
}
class MyPropsComponent extends Component {
  componentWillReceiveProps(nextProps) {
    if (this.props.myPropsInfo !== nextProps.myPropsInfo) {
      this.refs.myDiv2.innerHTML += this.props.myPropsInfo;
      // above: this will display the parent's state value, before it's altered.
      this.refs.myDiv3.innerHTML += nextProps.myPropsInfo;
      // above: this will display the parent's state value, after it's altered.
      // note: both (above) "refs" cannot render to the same div element.
    }
  }
  render() {
    return (
      <div>
        <hr />
        <div>{this.props.myPropsInfo}</div>
        <hr />
        <div style={{ color: "#a00", fontWeight: "bold" }}>
          Below: Inside the componentWillReceiveProps() method
        </div>
        <div ref="myDiv2" />
        <div ref="myDiv3" />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
