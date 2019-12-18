// filename: Table-Simple.js
// to view, change this file's name to index.js
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  const myContainer = {
    maxWidth: "400px",
    margin: "10px auto",
    padding: "6px",
    backgroundColor: "#ddd",
    textAlign: "left",
    border: "1px solid #000"
  };
  const myTableStyle = { width: "100%" };
  return (
    <div style={myContainer}>
      <table style={myTableStyle}>
        <thead>
          <tr>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>table data 1</td>
            <td>table data 2</td>
            <td>table data 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
