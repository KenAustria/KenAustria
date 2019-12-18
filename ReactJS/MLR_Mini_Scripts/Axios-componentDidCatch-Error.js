// filename: Axios-componentDidCatch-Error.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//====================================================================================
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
//====================================================================================
class ErrorBoundary extends Component {
  state = { error: null, errorInfo: null };
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    //        above: comment out to design the error component.
  }
  //        componentDidMount() {// comment in to design the error component.
  //        this.setState({error:"Error status: ", errorInfo:"Data"});
  //    }
  render() {
    const errorStyle = {
      display: "inline-block",
      width: "94%",
      margin: "6px auto",
      padding: "6px",
      border: "1px solid #000",
      borderRadius: "10px",
      backgroundColor: "#800",
      color: "#ff9",
      fontSize: "14px",
      fontWeight: "lighter",
      textDecoration: "none"
    };
    if (this.state.errorInfo) {
      return (
        <div>
          <div style={errorStyle}>
            {this.state.error && this.state.error.toString()}
          </div>
          <div style={errorStyle}>This is a custom error message.</div>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
class App extends Component {
  state = { myCurrentId: null, myLoadedData: null, myAllowLoad: false };
  //------------------------------------------------------------------------------------
  myLoadingStyle = { fontSize: "24px", color: "#a00", fontWeight: "bold" };
  myBottomSpaceStyle = { marginBottom: "6px" };
  //------------------------------------------------------------------------------------
  componentDidMount() {
    // below: the URL should be users
    axios
      .get("/user/" + 1, {
        validateStatus: status => {
          return status < 500;
        } // perpetual good status, so Axios won't handle an error.
      })
      .then(response => {
        this.setState({ myCurrentId: 1, myLoadedData: response.data });
      })
      .catch(error => {
        return Promise.reject(error); // this is required.
      });
  }
  componentDidUpdate() {
    if (this.state.myAllowLoad) {
      // below: the URL should be users
      axios
        .get("/users/" + this.state.myCurrentId, {
          validateStatus: status => {
            return status < 500;
          } // perpetual good status, so Axios won't handle an error.
        })
        .then(response => {
          this.setState({ myLoadedData: response.data, myAllowLoad: false });
        })
        .catch(error => {
          return Promise.reject(error);
        }); // this is required.
    }
  }
  //------------------------------------------------------------------------------------
  myNextPostMethod = () => {
    this.state.myCurrentId === 4
      ? this.setState({ myCurrentId: 1, myAllowLoad: true })
      : this.setState(prevState => {
          return {
            myCurrentId: prevState.myCurrentId + 1,
            myAllowLoad: true
          };
        });
  };
  //------------------------------------------------------------------------------------
  render() {
    let myData = null;
    if (!this.state.myCurrentId) {
      myData = <div style={this.myLoadingStyle}>Loading...!</div>;
    }
    if (this.state.myLoadedData) {
      myData = (
        <div>
          <button
            style={this.myBottomSpaceStyle}
            onClick={this.myNextPostMethod}
          >
            Next data batch
          </button>
          <div style={this.myBottomSpaceStyle}>
            Name: {this.state.myLoadedData.name}
          </div>
          <div>City: {this.state.myLoadedData.address.city}</div>
        </div>
      );
    }
    return <div>{myData}</div>;
  }
}
const MyContainerComponent = () => {
  const myContainerStyle = {
    maxWidth: "440px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  const myLinkStyle = {
    display: "inline-block",
    width: "80%",
    margin: "6px auto",
    padding: "6px",
    border: "1px solid #000",
    borderRadius: "10px",
    backgroundColor: "#bbb",
    color: "#000",
    textDecoration: "none"
  };
  return (
    <div style={myContainerStyle}>
      <div>
        <a
          href="project-files.zip"
          download="project-files.zip"
          style={myLinkStyle}
        >
          Download this app's project files
        </a>
      </div>
      <hr />
      <ErrorBoundary zzz="ZZZ">
        <App />
      </ErrorBoundary>
    </div>
  );
};
ReactDOM.render(<MyContainerComponent />, document.getElementById("root"));
