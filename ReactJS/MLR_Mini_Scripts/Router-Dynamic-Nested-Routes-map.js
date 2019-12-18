// filename: Router-Dynamic-Nested-Routes-map.js
// this file must be named index.js
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
//============================================================================
const Course = props => <div>{props.match.params.title}</div>;
//============================================================================
class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "React" },
      { id: 2, title: "JavaScript" },
      { id: 3, title: "Redux" }
    ]
  };
  hrStyle = { margin: "4px 0 8px" };
  render() {
    return (
      <div>
        <h5>Amazing Udemy Courses</h5>
        <section>
          {this.state.courses.map(course => {
            return (
              <Link
                key={course.id + course.title}
                to={`/course/${course.id}/${course.title}`}
                className="Link"
              >
                <article className="Course">{course.title}</article>
              </Link>
            );
          })}
        </section>
        <hr style={this.hrStyle} />
        <Route path="/course/:id/:title" component={Course} />
      </div>
    );
  }
}
//============================================================================
const App = () => {
  const myContainerStyle = {
    maxWidth: "320px",
    margin: "10px auto",
    padding: "6px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000",
    fontSize: "16px",
    fontFamily: "Helvetica"
  };
  return (
    <div style={myContainerStyle}>
      <Courses />
    </div>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
