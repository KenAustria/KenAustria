// filename: Lifecycle-componentWillUnmount-Remove-Component.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class User extends Component {
  componentWillMount() {
    // This is the main point of this script.
    if (this.props.showUserComponent) {
      this.props.removeUserHandler();
    }
    // Above: Comment out, to see a different result.
    const myMessage = `componentWillMount could not stop
            the original User mount,
            but, componentWillMount is needed
            to cause the User component to unmount.`;
    console.log(myMessage);
  }
  componentDidMount() {
    console.log("componentDidMount: User mounted.");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: User is about to be unmounted.");
  }
  render() {
    return (
      <div>
        I am the User component. {this.props.showUserComponent.toString()}
        <hr />
      </div>
    );
  }
}
class App extends Component {
  state = { showUserComponent: true };
  removeUserHandler = () => {
    this.setState(prevState => {
      return { showUserComponent: !prevState.showUserComponent };
    });
  };
  render() {
    const myContainer = {
      maxWidth: "340px",
      margin: "10px auto",
      padding: "6px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    return (
      <div style={myContainer}>
        {this.state.showUserComponent ? (
          <User
            showUserComponent={this.state.showUserComponent}
            removeUserHandler={this.removeUserHandler}
          />
        ) : null}
        <div>
          If this is the only text here, then, <br />
          componentWillMount() and<br />
          state.showUserComponent: "{this.state.showUserComponent.toString()}",{" "}
          <br />
          did help to cause the User component<br />
          to unmount, but,<br />
          User's original mount wasn't prevented.<br />
          Also: See the console.
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
