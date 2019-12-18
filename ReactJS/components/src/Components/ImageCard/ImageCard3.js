import React from "react";
import classes from "./ImageCard.module.scss";

const ImageCard3 = () => {
  return (
    <div className={classes.ImageCard}>
      <div className={classes.ImageCardSide + " " + classes.ImageCardSideFront}>
        <div
          className={classes.ImageCardPicture + " " + classes.ImageCardPicture3}
        >
          &nbsp;
        </div>
        <h4 className={classes.ImageCardHeading}>
          <span className={classes.ImageCardHeadingSpan}>Blog About It</span>
        </h4>
        <div className={classes.ImageCardDetails}>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Axios</li>
            <li>React-Router</li>
            <li>Redux Form</li>
          </ul>
        </div>
      </div>
      <div
        className={
          classes.ImageCardSide +
          " " +
          classes.ImageCardSideBack +
          " " +
          classes.ImageCardSideBack1
        }
      >
        <div className={classes.CallToAction}>
          <div className={classes.DescriptionBox}>
            <p className={classes.Description}>
              {" "}
              A multi-page web React-Redux application using React-Router, built
              with validated forms from Redux Form that saves the record to a
              remote server.
            </p>
          </div>
          <a
            href="https://blogaboutit.herokuapp.com/"
            className={classes.btn + " " + classes.btnWhite}
          >
            Live
          </a>
          <a
            href="https://github.com/KenAustria/BlogAboutIt"
            className={classes.btn + " " + classes.btnWhite}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard3;
