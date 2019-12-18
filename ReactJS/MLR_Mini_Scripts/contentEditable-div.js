// filename: contentEditable-div.js
// this file must be named index.js
import React from "react";
import ReactDOM from "react-dom";

class Editable extends React.Component {
  componentDidMount() {
    this.myRefElem.innerHTML = this.props.myInputText;
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.myInputText === "CLEARED";
  }
  // Above: Goal; only allow rendering upon a button click.
  componentWillUpdate(nextProps) {
    this.myRefElem.innerHTML = nextProps.myInputText;
  }
  // Above: Using nextProps.myInputText is important for the proper update.
  render() {
    const myEditableStyle = {
      display: "inline-block",
      minWidth: "70%",
      padding: "10px",
      margin: "0 10px 10px 0",
      border: "1px solid #ccc",
      backgroundColor: "#eee"
    };
    return (
      <div>
        <div
          style={myEditableStyle}
          contentEditable
          onInput={this.props.myOnInput}
          onFocus={this.props.myOnInput}
          ref={el => (this.myRefElem = el)}
        />
        <input type="button" value="Clear" onClick={this.props.myBtnClick} />
        {this.props.myInputText === "CLEARED" ? (
          <div>Type something in the field and press clear again.</div>
        ) : (
          ""
        )}
      </div>
    ); // onChange() does not work with <div>.
  } // contentEditable elements require a re-rendering work-around.
}
class App extends React.Component {
  state = { myInputText: "Type something and click clear..." };
  myHandleOnInput = event => {
    event.type === "focus"
      ? (event.target.innerHTML = "")
      : this.setState({ myInputText: event.target.innerHTML });
  }; // Above: setState({myInputText: setting to an empty string, doesn't work });
  myHandleClick = () => {
    this.setState({ myInputText: "CLEARED" });
  };
  render() {
    const myContainer = {
      maxWidth: "420px",
      minHeight: "130px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#bbb",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const linkStyle = {
      display: "inline-block",
      width: "80%",
      margin: "0 auto 6px",
      padding: "6px",
      border: "1px solid #000",
      borderRadius: "10px",
      backgroundColor: "#ff9",
      color: "#330",
      textDecoration: "none"
    };
    return (
      <div style={myContainer}>
        <div>
          <a
            href="project-files.zip"
            download="project-files.zip"
            style={linkStyle}
          >
            Download this app's project files
          </a>
        </div>
        <hr />
        <Editable
          myInputText={this.state.myInputText}
          myOnInput={this.myHandleOnInput}
          myBtnClick={this.myHandleClick}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
