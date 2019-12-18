// filename: bind-per-map-item-2.js
// to view, change this file's name to index.js
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
// this is the best & proper way to use React's default binding. note, bind() is not used.
// this avoids adding bind(), to an event function, to each list item,
// which will cause wasteful processing.
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myStateData: [
        { myId: 1, myListItemProp: "One", myColor: true },
        { myId: 2, myListItemProp: "Two", myColor: true },
        { myId: 3, myListItemProp: "Three", myColor: true }
      ]
    };
  }
  onItemClick = e => {
    let myListItemNum = e.target.getAttribute("data-mynum") - 1;
    let myListItemPropAlt = { ...this.state.myStateData };
    if (this.state.myStateData[myListItemNum].myColor) {
      e.target.style.backgroundColor = "#faa";
      myListItemPropAlt[myListItemNum].myColor = false;
      this.setState({ myListItemPropAlt });
    } else {
      e.target.style.backgroundColor = "#caf";
      myListItemPropAlt[myListItemNum].myColor = true;
      this.setState({ myListItemPropAlt });
    }
  };
  render() {
    const myContainer = {
      maxWidth: "300px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#777",
      textAlign: "center",
      border: "1px solid #000",
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "normal"
    };
    const myStyles = {
      myLightFont: { display: "inline-block", color: "#ccc" },
      myButton: { padding: "6px", borderRadius: "6px", backgroundColor: "#555" }
    };
    return (
      <div style={myContainer}>
        <div>
          <span style={{ ...myStyles.myLightFont }}>
            Click the bars (below)
          </span>
        </div>
        {/* avoid using inline objects (inefficient). educational only. */}
        <MyList
          myStateData={this.state.myStateData}
          onItemClick={this.onItemClick}
        />
        <div>
          <a
            href="project-files.zip"
            download="project-files.zip"
            style={{ textDecoration: "none" }}
          >
            <span style={{ ...myStyles.myLightFont, ...myStyles.myButton }}>
              Download Project Files
            </span>
          </a>
        </div>
      </div>
    );
  }
}
const MyList = props => {
  // props come from the App component.
  const myListStyle = {
    listStyleType: "none",
    padding: "1px 0",
    backgroundColor: "#777",
    textAlign: "center"
  };
  return (
    <ul style={myListStyle}>
      {props.myStateData.map(item => (
        <ListItem key={item.myId} item={item} myOnClick={props.onItemClick} />
      ))}
    </ul>
  );
};
const ListItem = props => {
  // props come from the MyList component. except data-mynum: from the App component.
  const myListItemStyle = {
    margin: "2px 0",
    padding: "4px",
    backgroundColor: "#caf"
  };
  return (
    <li
      onClick={props.myOnClick}
      data-mynum={props.item.myId}
      style={myListItemStyle}
    >
      {props.item.myListItemProp}
    </li>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
