import React from "react";
import classes from "./ImageCard.module.scss";

const ImageCard2 = () => {
  return (
    <div className={classes.ImageCard}>
      <div className={classes.ImageCardSide + " " + classes.ImageCardSideFront}>
        <div
          className={classes.ImageCardPicture + " " + classes.ImageCardPicture2}
        >
          &nbsp;
        </div>
        <h4 className={classes.ImageCardHeading2}>
          <span className={classes.ImageCardHeadingSpan}>
            Dan The WeatherMan
          </span>
        </h4>
        <div className={classes.ImageCardDetails}>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Axios</li>
            <li>Google Maps</li>
            <li>OpenWeatherMap</li>
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
              A React-Redux weather forecast web application, using asynchronous
              calls with Axios.
            </p>
          </div>
          <a
            href="http://dantheweatherman.herokuapp.com/"
            className={classes.btn + " " + classes.btnWhite}
          >
            Live
          </a>
          <a
            href="https://github.com/KenAustria/DanTheWeatherMan"
            className={classes.btn + " " + classes.btnWhite}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageCard2;
