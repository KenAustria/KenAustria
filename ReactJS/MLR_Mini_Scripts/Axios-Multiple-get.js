// filename: Axios-Multiple-get.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
//====================================================================================
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
//const instance = axios.create({
//    baseURL: 'https://jsonplaceholder.typicode.com'
//});
//====================================================================================
class App extends Component {
  state = { myCurrentId: null, myLoadedData: null };
  //------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "340px",
    margin: "10px auto",
    padding: "4px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myLoadingStyle = { fontSize: "24px", color: "#a00", fontWeight: "bold" };
  myBottomSpaceStyle = { marginBottom: "6px" };
  //------------------------------------------------------------------------------------
  componentDidMount() {
    axios.get("/users/1").then(response1 => {
      axios
        .get("/users/2")
        .then(response2 => {
          this.setState({
            myLoadedData: [response1.data, response2.data]
          });
        })
        .catch(error => {
          console.log("My error: ", error);
        });
    });
  }
  //------------------------------------------------------------------------------------
  render() {
    let myData = null;
    if (!this.state.myCurrentId) {
      myData = <div style={this.myLoadingStyle}>Loading...!</div>;
    }
    if (this.state.myLoadedData) {
      myData = this.state.myLoadedData.map(myCurrentItem => (
        <div key={myCurrentItem.id}>
          <div style={this.myBottomSpaceStyle}>Name: {myCurrentItem.name}</div>
          <div>City: {myCurrentItem.address.city}</div>
          {myCurrentItem.id < this.state.myLoadedData.length && <hr />}
        </div>
      ));
    }
    return <div style={this.myContainerStyle}>{myData}</div>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
//{
//    "id": 1,
//    "name": "Leanne Graham",
//    "username": "Bret",
//    "email": "Sincere@april.biz",
//    "address": {
//      "street": "Kulas Light",
//      "suite": "Apt. 556",
//      "city": "Gwenborough",
//      "zipcode": "92998-3874",
//      "geo": {
//        "lat": "-37.3159",
//        "lng": "81.1496"
//      }
//    },
//    "phone": "1-770-736-8031 x56442",
//    "website": "hildegard.org",
//    "company": {
//      "name": "Romaguera-Crona",
//      "catchPhrase": "Multi-layered client-server neural-net",
//      "bs": "harness real-time e-markets"
//    }
//  }
