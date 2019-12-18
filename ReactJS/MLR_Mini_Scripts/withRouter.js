// this does not work. it's just an example.
// now, myChildComponent will have access to the ...
// props >history Object (from MyParentComponent).
import React from "react";
import { withRouter } from "react-router-dom";

const myChildComponent = props => (
  <div>
    <h3>withRouter</h3>
  </div>
);
export default withRouter(myChildComponent);
