import React from "react";
import classes from "./GridTest.module.scss";

const GridTest = () => {
  return (
    <div className={classes.GridTest}>
      <div className={classes.Row}>
        <div className={classes.col1of2}>Col 1 of 2</div>
        <div className={classes.col1of2}>Col 1 of 2</div>
      </div>

      <div className={classes.Row}>
        <div className={classes.col1of3}>Col 1 of 3</div>
        <div className={classes.col1of3}>Col 1 of 3</div>
        <div className={classes.col1of3}>Col 1 of 3</div>
      </div>

      <div className={classes.Row}>
        <div className={classes.col1of2}>Col 1 of 2</div>
        <div className={classes.col1of2}>Col 1 of 2</div>
      </div>

      <div className={classes.Row}>
        <div className={classes.col1of4}>Col 1 of 4</div>
        <div className={classes.col1of4}>Col 1 of 4</div>
        <div className={classes.col1of4}>Col 1 of 4</div>
        <div className={classes.col1of4}>Col 1 of 4</div>
      </div>

      <div className={classes.Row}>
        <div className={classes.col1of3}>Col 1 of 3</div>
        <div className={classes.col1of3}>Col 1 of 3</div>
        <div className={classes.col1of3}>Col 1 of 3</div>
      </div>

      <div className={classes.Row}>
        <div className={classes.col1of2}>Col 1 of 2</div>
        <div className={classes.col1of2}>Col 1 of 2</div>
      </div>
    </div>
  );
};

export default GridTest;
