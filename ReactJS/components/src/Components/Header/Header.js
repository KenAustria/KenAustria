import React, { Component } from "react";
import classes from "./Header.module.scss";
import Logo from "../Logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlideshare,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
class Header extends Component {
  render() {
    return (
      <div className={classes.Header}>
        <Logo />
        <div className={classes.TextBox}>
          <h1 className={classes.HeadingPrimary}>
            <span class={classes.HeadingPrimaryMain}>Ken Austria</span>
            <span class={classes.HeadingPrimarySub}>Software Engineer</span>
          </h1>

          <a
            href="https://www.slideshare.net/KennethAustriaPangil"
            className={classes.SocialIcon}
          >
            <FontAwesomeIcon icon={faSlideshare} fixedWidth />
          </a>
          <a
            href="https://www.linkedin.com/in/kenaustria/"
            className={classes.SocialIcon}
          >
            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
          </a>
          <a
            href="https://github.com/KenAustria"
            className={classes.SocialIcon}
          >
            <FontAwesomeIcon icon={faGithub} fixedWidth />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
