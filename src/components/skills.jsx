import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),
  },

  heading: {
    color: "#96a6ad",
    fontWeight: "fontWeightMedium",
    fontSize: "h3.fontSize",
  },

  icon: {
    color: "#96a6ad",
    fontSize: theme.spacing(8),
    margin: theme.spacing(3),
    marginTop: theme.spacing(5),
  },
}));

const Skills = () => {
  const classes = useStyle();
  return (
    <Grid
      item
      container
      className={classes.root}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h3" className={classes.heading}>
          Skills
        </Typography>
      </Grid>
      <Grid item container direction="row">
        <Grid item sm={2} />
        <Grid item sm={8}>
          <FontAwesomeIcon icon={["fab", "python"]} className={classes.icon} />
          <FontAwesomeIcon
            icon={["fab", "js-square"]}
            className={classes.icon}
          />
          <FontAwesomeIcon icon={["fab", "java"]} className={classes.icon} />
          <FontAwesomeIcon icon={["fab", "react"]} className={classes.icon} />
          <FontAwesomeIcon icon={["fab", "node"]} className={classes.icon} />
          <FontAwesomeIcon
            icon={["fab", "bootstrap"]}
            className={classes.icon}
          />
          <FontAwesomeIcon
            icon={["fas", "database"]}
            className={classes.icon}
          />
          <FontAwesomeIcon icon={["fab", "git-alt"]} className={classes.icon} />
          <FontAwesomeIcon icon={["fab", "aws"]} className={classes.icon} />
          <FontAwesomeIcon icon={["fab", "vuejs"]} className={classes.icon} />
          <FontAwesomeIcon icon={["fab", "html5"]} className={classes.icon} />
          <FontAwesomeIcon
            icon={["fab", "css3-alt"]}
            className={classes.icon}
          />
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </Grid>
  );
};

export default Skills;
