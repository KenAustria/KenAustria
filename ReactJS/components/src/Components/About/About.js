import React from "react";
import classes from "./About.module.scss";
import lapaz from "../../Images/lapaz.jpg";
import larry from "../../Images/larry.jpg";
import portfolio from "../../Images/portfolio.jpg";

const About = () => {
  return (
    <div className={classes.About}>
      <div className={classes.UCenterText}>
        <h2 className={classes.HeadingSecondary}>About</h2>
      </div>

      <div className={classes.Row}>
        <div className={classes.col1of2}>
          <h3 className={classes.HeadingTertiary}>
            Positioned to utilize solid design and conceptual skills to meet and
            exceed organizational targets.
          </h3>
          <p className={classes.Paragraph}>
            Under mentorship in a deeply immersive agile development setting, I
            thrive on quick iterations, transparent communication during
            stand-up meetings, and quality pairing when necessary. I've gained
            hands-on experience in identifying areas of optimization and
            injected my own opinions on how things can be improved beyond
            specifications.
          </p>
          <p className={classes.Paragraph}>
            Besides developing functional, eye-catching web applications, I've
            also performed dev ops to ensure that the infrastructure supporting
            the site contains the correct architecture.
          </p>
          <p className={classes.Paragraph2}>
            I would love to work on new challenges with a competent team eager
            to push web technology to its limits.
          </p>
        </div>

        <div className={classes.col1of2}>
          <div className={classes.Composition}>
            <img
              src={lapaz}
              alt="Photo1"
              className={
                classes.CompositionPhoto + " " + classes.CompositionPhotoP1
              }
            />
            <img
              src={larry}
              alt="Photo2"
              className={
                classes.CompositionPhoto + " " + classes.CompositionPhotoP2
              }
            />
            <img
              src={portfolio}
              alt="Photo3"
              className={
                classes.CompositionPhoto + " " + classes.CompositionPhotoP3
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
