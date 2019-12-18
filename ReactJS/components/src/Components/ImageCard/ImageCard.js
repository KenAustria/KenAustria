import React from "react";
import classes from "./ImageCard.module.scss";

const ImageCard = () => {
  return (
    <div className={classes.ImageCard}>
      <div className={classes.ImageCardSide + " " + classes.ImageCardSideFront}>
        <div
          className={classes.ImageCardPicture + " " + classes.ImageCardPicture1}
        >
          &nbsp;
        </div>
        <h4 className={classes.ImageCardHeading}>
          <span className={classes.ImageCardHeadingSpan}>Burger Builder</span>
        </h4>
        <div className={classes.ImageCardDetails}>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Axios</li>
            <li>React Router</li>
            <li>Firebase</li>
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
              Build a burger and create an order that is sent to Firebase
            </p>
          </div>
          <a
            href="https://burgerbuilder-be355.firebaseapp.com/"
            className={classes.btn + " " + classes.btnWhite}
          >
            Live
          </a>
          <a
            href="https://github.com/KenAustria/Burger-Builder"
            className={classes.btn + " " + classes.btnWhite}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
