// filename: map-in-a-map.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

const SongTitle = props => <div>{props.title}</div>;
const SongList = props => {
  return (
    <div>
      {props.titles.map(arrayItemArray =>
        arrayItemArray.map(arrayItemObject => (
          <SongTitle key={arrayItemObject.myId} title={arrayItemObject.title} />
        ))
      )}
    </div>
  );
};
class Rush extends Component {
  state = {
    titles: [
      [
        { myId: "01x", title: "Working Man" },
        { myId: "02x", title: "2112" },
        { myId: "03x", title: "Closer to the Heart" },
        { myId: "04x", title: " La Villa Strangiato" }
      ],
      [
        { myId: "05x", title: "Tom Sawyer" },
        { myId: "06x", title: "YYZ" },
        { myId: "07x", title: "Limelight" },
        { myId: "08x", title: "Subdivisions" }
      ],
      [
        { myId: "09x", title: "Red Sector A" },
        { myId: "10x", title: "The Big Money" },
        { myId: "11x", title: "Time Stand Still" },
        { myId: "12x", title: "Show Don't Tell" }
      ]
    ]
  };
  myContainer = {
    maxWidth: "300px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  render() {
    return (
      <div style={this.myContainer}>
        <SongList titles={this.state.titles} />
      </div>
    );
  }
}
ReactDOM.render(<Rush />, document.getElementById("root"));
