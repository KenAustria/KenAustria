import React from "react";
import classes from "./Logo.module.scss";
import logopic from "../../Images/logo.jpg";

const logo = () => {
  return (
    <div className={classes.Header__LogoBox}>
      <img src={logopic} alt="Logo" className={classes.Header__Logo} />
    </div>
  );
};

export default logo;
