// filename: Lifecycle-shouldComponentUpdate-Warning.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//-------------------------------------------------------------------------
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "AUTH TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use(
  request => request,
  error => Promise.reject(error)
);
axios.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);
//-------------------------------------------------------------------------
class App extends Component {
  state = { myGetDataId: 0, myDataLoaded: null, myAllowLoad: false };
  //-------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "8px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myLoadingStyle = { fontSize: "24px", color: "#a00", fontWeight: "bold" };
  myBottomSpaceStyle = { marginBottom: "6px" };
  //-------------------------------------------------------------------------
  componentDidMount() {
    axios.get("/posts/" + 1).then(response => {
      this.setState({ myGetDataId: 1, myDataLoaded: response.data });
    });
  }
  //    shouldComponentUpdate(nextProps, nextState) {
  //        return this.state.myGetDataId !== nextState.myGetDataId;
  //    }// IMPORTANT: read the notes below.
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.myGetDataId !== this.state.myGetDataId) {
      axios.get("/posts/" + this.state.myGetDataId).then(response => {
        this.setState({
          myDataLoaded: response.data
        });
      });
    }
  }
  //-------------------------------------------------------------------------
  myGetNextDataMethod = () => {
    this.state.myGetDataId === 4
      ? this.setState({ myGetDataId: 1 })
      : this.setState(prevState => ({
          myGetDataId: prevState.myGetDataId + 1
        }));
  };
  //-------------------------------------------------------------------------
  render() {
    let myData = null;
    if (!this.state.myDataLoaded) {
      myData = <div style={this.myLoadingStyle}>Loading...!</div>;
    }
    if (this.state.myDataLoaded) {
      myData = (
        <div>
          <button
            style={this.myBottomSpaceStyle}
            onClick={this.myGetNextDataMethod}
          >
            Click to load the next post
          </button>
          <div>
            title: {this.state.myDataLoaded.title.slice(0, 12)}
            <br />
            Id: {this.state.myDataLoaded.id}
          </div>
        </div>
      );
    }
    return <div style={this.myContainerStyle}>{myData}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
//IMPORTANT: this invokes immediately after an altered state.
//meaning, before the setState Callback function & the Coder's custom Methods.
//WARNING: so, the render() will invoke before the setState Callback function & the Coder's custom Methods
//are updated, potentially causing the "one step behind" scenario.
//-------------------------------------------------------------------------
//[
//  {
//    "userId": 1,
//    "id": 1,
//    "title": "sunt aut facere repellat provident ...",
//    "body": "quia et suscipit\nsuscipit recusandae ..."
//  },
//  {
//    "userId": 1,
//    "id": 2,
//    "title": "qui est esse",
//    "body": "est rerum tempore vitae\nsequi sint ..."
//  },
//  {
//    "userId": 1,
//    "id": 3,
//    "title": "ea molestias quasi exercitationem ...",
//    "body": "et iusto sed quo iure\nvoluptatem ..."
//  },
//  {
//    "userId": 1,
//    "id": 4,
//    "title": "eum et est occaecati",
//    "body": "ullam et saepe reiciendis volupt ..."
//  }
