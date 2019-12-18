// filename: Context-API-Pass-Object.js
// this file must be named index.js
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
//=========================================================================================
const myCreateContext = React.createContext(false);
//=========================================================================================
const MyComponent2 = () => {
  return (
    <myCreateContext.Consumer>
      {myAuth => (
        <div
          onClick={myAuth.myStringMethodProps}
          style={myAuth.myDivStyleProps}
        >
          {myAuth.myComponent2TextProps ? (
            <div>Click here</div>
          ) : (
            <div>{myAuth.myStringProps}</div>
          )}
        </div>
      )}
    </myCreateContext.Consumer>
  );
};
//=========================================================================================
const MyComponent1 = () => {
  const myComponent1Style = {
    maxWidth: "80%",
    margin: "8px auto",
    padding: "8px 0",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  //-------------------------------------------------------------------------------------
  return (
    <div style={myComponent1Style}>
      <myCreateContext.Consumer>
        {myAuth =>
          myAuth.myAuthProps ? (
            <div>Authenticated: Yes</div>
          ) : (
            <div>Authenticated: No</div>
          )
        }
      </myCreateContext.Consumer>
      <div>
        <myCreateContext.Consumer>
          {myAuth => (
            <div style={myAuth.myDivStyleProps}>{myAuth.myStringProps}</div>
          )}
        </myCreateContext.Consumer>
      </div>
    </div>
  );
};
//=========================================================================================
class App extends Component {
  state = {
    myData: [{ id: "1", name: "Max" }, { id: "2", name: "Manu" }],
    myAuthenticated: false,
    myComponent2Text: true
  };
  //-------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "8px 0",
    backgroundColor: "#9cf",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  myDivStyle = {
    maxWidth: "90%",
    margin: "0 auto",
    padding: "3px",
    backgroundColor: "#ff0",
    borderRadius: "10px",
    border: "1px solid #000"
  };
  //-------------------------------------------------------------------------------------
  myString = "A string of text";
  myAuthMethod = () =>
    this.setState(nextState => {
      return { myAuthenticated: !nextState.myAuthenticated };
    });
  myStringMethod = () =>
    this.setState(nextState => {
      return { myComponent2Text: !nextState.myComponent2Text };
    });
  //-------------------------------------------------------------------------------------
  render() {
    const myContextProviderValue = {
      myAuthProps: this.state.myAuthenticated,
      myStringProps: this.myString,
      myComponent2TextProps: this.state.myComponent2Text,
      myStringMethodProps: this.myStringMethod,
      myDivStyleProps: this.myDivStyle
    };
    const MyComponent1Dom = (
      <Fragment>
        {this.state.myData.map((myCurrentItem, index) => {
          return <MyComponent1 key={myCurrentItem.id + "x"} />;
        })}
      </Fragment>
    );
    //---------------------------------------------------------------------------------
    return (
      <div style={this.myContainerStyle}>
        {this.state.myAuthenticated ? (
          <button onClick={this.myAuthMethod}>Remove authentication</button>
        ) : (
          <button onClick={this.myAuthMethod}>Get authenticated</button>
        )}
        <myCreateContext.Provider value={myContextProviderValue}>
          {MyComponent1Dom}
          <hr />
          <MyComponent2 />
        </myCreateContext.Provider>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
