// filename: bind-per-map-item-1.js
// to view, change this file's name to index.js
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
// this is the best & proper way to use React's default binding. note, bind() is not used.
// this avoids adding bind(), to an event function, to each list item,
// which will cause wasteful processing.
import React from "react";
import ReactDOM from "react-dom";

const MyPersonComponent = props => {
  const myCssStyle = {
    maxWidth: "80%",
    margin: "6px auto",
    padding: "6px 0",
    backgroundColor: "#dd0",
    border: "1px solid #000",
    borderRadius: "10px"
  };
  return (
    <div onClick={props.myPropsDelete} style={myCssStyle}>
      {props.myPropsName} {props.myPropsAge}
    </div>
  );
};
class App extends React.Component {
  state = {
    myStatePersons: [
      { myId: "z1", myName: "Max", myAge: 28 },
      { myId: "z2", myName: "Stephanie", myAge: 34 },
      { myId: "z3", myName: "Alison", myAge: 47 }
    ],
    myShowPersons: false
  };
  myDeletePersonHandler = myPersonIndex => {
    const myLocalPersons = [...this.state.myStatePersons];
    // best practice: don't mutate the original array. create a copy of the array.
    myLocalPersons.splice(myPersonIndex, 1); // delete the one specified array item.
    this.setState({ myStatePersons: myLocalPersons });
  };
  myToggleInterface = () => {
    const myLocalShowPersons = this.state.myShowPersons;
    this.setState({ myShowPersons: !myLocalShowPersons });
  };
  render() {
    const myContainer = {
      maxWidth: "200px",
      minHeight: "50px",
      margin: "10px auto",
      padding: "6px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "lighter"
    };
    const myButtonStyle = {
      padding: "8px",
      backgroundColor: "#7d7",
      outline: "none",
      borderRadius: "10px",
      color: "#000",
      fontSize: "1.0rem"
    };
    let myPersonsContainer = null;
    if (this.state.myShowPersons) {
      myPersonsContainer = (
        <div>
          {this.state.myStatePersons.map((myMapPerson, myIndex) => {
            return (
              <MyPersonComponent
                key={myMapPerson.myId}
                myPropsName={myMapPerson.myName}
                myPropsAge={myMapPerson.myAge}
                myPropsDelete={() => this.myDeletePersonHandler(myIndex)}
              />
            );
          })}
          {/* when an item is deleted, some of the remaining items receive a different myIndex #. */}
        </div>
      );
      myButtonStyle.backgroundColor = "#800";
      myButtonStyle.color = "#fff";
    }
    return (
      <div style={myContainer}>
        <button onClick={this.myToggleInterface} style={myButtonStyle}>
          Toggle Interface
        </button>
        {this.state.myShowPersons ? myPersonsContainer : null}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
