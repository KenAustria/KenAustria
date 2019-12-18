import React from "react";
import classes from "./Footer.module.scss";
import logopic from "../../Images/logo.jpg";

const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.FooterLogoBox}>
        <img src={logopic} alt="Logo" className={classes.Footer_Logo} />
      </div>
      <div className={classes.Row}>
        <div className={classes.col1of2}>
          <div className={classes.FooterNavigation}>
            <ul className={classes.FooterList}>
              <li className={classes.FooterItem}>
                <a
                  href="https://www.slideshare.net/KennethAustriaPangil"
                  className={classes.FooterLink}
                >
                  SlideShare
                </a>
              </li>
              <li className={classes.FooterItem}>
                <a
                  href="https://www.linkedin.com/in/kenaustria/"
                  className={classes.FooterLink}
                >
                  LinkedIn
                </a>
              </li>
              <li className={classes.FooterItem}>
                <a
                  href="https://github.com/KenAustria"
                  className={classes.FooterLink}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.col1of2}>
          <p className={classes.Footer_Copyright}>
            Ken Austria | San Francisco
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
