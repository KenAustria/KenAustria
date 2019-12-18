// filename: Router-render-map.js
// to view, change this file's name to index.js
// the appointment <Route> is inside the App component,
//       but its <Link> is inside the Doctors component.
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Appointment = props => {
  const appointmentStyle = {
    maxWidth: "90%",
    margin: "0 auto 6px",
    padding: "6px 0",
    backgroundColor: "#9df",
    border: "1px solid #000",
    borderRadius: "10px"
  };
  const doctorName = parseInt(props.match.params.appointmentId, 10) - 1;
  return (
    <div style={appointmentStyle}>
      <div>Appointment for {props.doctors_list[doctorName].doctor_name}</div>
      <div>Please fill out the form</div>
    </div>
  );
};
const Doctors = props => {
  const doctorsStyle = {
    maxWidth: "90%",
    margin: "0 auto 6px",
    padding: "6px 0",
    backgroundColor: "#ff7",
    border: "1px solid #000",
    borderRadius: "10px"
  };
  return (
    <div style={doctorsStyle}>
      <div>
        <div>Name: {props.doctor_name}</div>
        <div>Speciality: {props.speciality}</div>
        <Link to={"/appointment/" + props.id}>Appointment</Link>
      </div>
    </div>
  );
};
class App extends React.Component {
  state = {
    doctors_list: [
      { id: "01", doctor_name: "Dr. Alpha", speciality: "Love" },
      { id: "02", doctor_name: "Dr. Beta", speciality: "Soul" },
      { id: "03", doctor_name: "Dr. Omega", speciality: "Spirit" }
    ]
  };
  mainContainerStyle = {
    maxWidth: "340px",
    margin: "10px auto",
    padding: "10px 0",
    backgroundColor: "#ddd",
    textAlign: "center",
    border: "1px solid #000"
  };
  render() {
    return (
      <BrowserRouter>
        <div style={this.mainContainerStyle}>
          <div>
            <Link to="/doctors/">Doctors</Link>
          </div>
          <div>
            <Route
              path="/doctors"
              render={props => {
                return this.state.doctors_list.map((doctor, index) => {
                  return (
                    <Doctors
                      key={index}
                      id={doctor.id}
                      doctor_name={doctor.doctor_name}
                      speciality={doctor.speciality}
                      {...props}
                    />
                  );
                });
              }}
            />
            <Route
              path={"/appointment/:appointmentId"}
              render={props => (
                <Appointment
                  doctors_list={this.state.doctors_list}
                  {...props}
                />
              )}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
