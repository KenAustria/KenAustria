import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import ImageCard2 from "../ImageCard/ImageCard2";
import ImageCard3 from "../ImageCard/ImageCard3";
import classes from "./Projects.module.scss";

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <div className={classes.Unskew}>
        <div className={classes.UCenterText + " " + classes.UMarginBottomSmall}>
          <h2 className={classes.ProjectHeadingSecondary}>Projects</h2>
        </div>

        <div className={classes.Row}>
          <div className={classes.col1of3}>
            <ImageCard />
          </div>
          <div className={classes.col1of3}>
            <ImageCard2 />
          </div>
          <div className={classes.col1of3}>
            <ImageCard3 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
