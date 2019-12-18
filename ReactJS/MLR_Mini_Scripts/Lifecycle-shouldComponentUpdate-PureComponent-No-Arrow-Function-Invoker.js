// filename: Lifecycle-shouldComponentUpdate-PureComponent-No-Arrow-Function-Invoker.js
// this file must be named index.js
// see the console.
import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
class MyPersonComponent extends PureComponent {
  myTextInputRef = React.createRef();
  //-------------------------------------------------------------------------------------------
  myPersonStyle = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px",
    backgroundColor: "#bbb",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #555",
    textAlign: "center"
  };
  myMessageStyle = { display: "inline-block", marginBottom: "8px" };
  myInputStyle = { textAlign: "center" };
  //-------------------------------------------------------------------------------------------
  //    componentDidMount() { console.log("MyPersonComponent mount"); }
  componentDidUpdate() {
    console.log("MyPersonComponent update");
  }
  //-------------------------------------------------------------------------------------------
  myOnChangeMethod = () => {
    let myCurrentInputText = this.myTextInputRef.current.value;
    this.props.myTextChangedMethod(this.props.id, myCurrentInputText);
  };
  //-------------------------------------------------------------------------------------------
  render() {
    console.log("MyPersonComponent render");
    return (
      <div style={this.myPersonStyle}>
        <div style={this.myMessageStyle}>
          {this.props.myName} {this.props.myAge}
        </div>
        <br />
        <input
          type="text"
          value={this.props.myName}
          ref={this.myTextInputRef}
          onChange={this.myOnChangeMethod}
          style={this.myInputStyle}
        />
      </div>
    );
  }
  // above: onChange={this.myOnChangeMethod} must be a reference.
  // onChange={this.props.myTextChangedMethod.bind(null, this.props.id)} also works.
  // inside MyApp, exchange: {...myPersonObjectItem, myName:event.target.value}.
  // an arrow function won't work.
}
class MyApp extends Component {
  state = {
    myPersonsArray: [
      { id: 1, myName: "Max", myAge: 28 },
      { id: 2, myName: "Alyson", myAge: 29 }
    ]
  };
  //-------------------------------------------------------------------------------------------
  myContainerStyle = {
    maxWidth: "380px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#9cf",
    textAlign: "center",
    border: "1px solid #000"
  };
  //-------------------------------------------------------------------------------------------
  myTextChangedMethod = (id, myCurrentInputText) => {
    const MyPersonsArrayUpdated = this.state.myPersonsArray.map(
      myPersonObjectItem =>
        myPersonObjectItem.id === id
          ? { ...myPersonObjectItem, myName: myCurrentInputText }
          : myPersonObjectItem
    );
    this.setState({ myPersonsArray: MyPersonsArrayUpdated });
  };
  myPersonRender = myPersonItem => {
    return (
      <MyPersonComponent
        key={myPersonItem.id}
        id={myPersonItem.id}
        myName={myPersonItem.myName}
        myAge={myPersonItem.myAge}
        myTextChangedMethod={this.myTextChangedMethod}
      />
    );
  };
  //-------------------------------------------------------------------------------------------
  render() {
    const myPersonsDom = (
      <div>{this.state.myPersonsArray.map(this.myPersonRender)}</div>
    );
    return <div style={this.myContainerStyle}>{myPersonsDom}</div>;
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
