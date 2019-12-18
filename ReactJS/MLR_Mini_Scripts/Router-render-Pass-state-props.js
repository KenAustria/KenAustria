// filename: Router-render-Pass-state-props.js
// to view, change this file's name to index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
const MyCourse = props => {
  let myContent = "";
  if (props.match.params.myParamsId) {
    let myCourseId = props.match.params.myParamsId - 1;
    myContent = (
      <div>
        <h4>{props.myState.myCourses[myCourseId].myTitle}</h4>
        <div>
          You selected the Course with Id:{" "}
          {props.myState.myCourses[myCourseId].myId}
        </div>
      </div>
    );
  }
  return myContent;
};
class MyApp extends Component {
  state = {
    myCourses: [
      { myId: 1, myTitle: "React 16" },
      { myId: 2, myTitle: "ES6" },
      { myId: 3, myTitle: "PHP 7" }
    ]
  };
  render() {
    const myMainContainer = {
      maxWidth: "340px",
      margin: "10px auto",
      padding: "10px 0",
      backgroundColor: "#ddd",
      textAlign: "center",
      border: "1px solid #000"
    };
    return (
      <BrowserRouter>
        <div style={myMainContainer}>
          {this.state.myCourses.map(myCourseItem => {
            return (
              <Link
                key={myCourseItem.myId + "x"}
                to={"/courses/course/" + myCourseItem.myId}
              >
                <article className="Course">{myCourseItem.myTitle}</article>
              </Link>
            );
          })}
          <hr />
          <Route
            path="/courses/course/:myParamsId"
            render={props => <MyCourse myState={this.state} {...props} />}
          />
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
