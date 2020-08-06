import React from "react";
import { Grid, Avatar, makeStyles, Typography } from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Twitter, Instagram } from "@material-ui/icons";
import meet from "../images/meet.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),

    "& > *": {
      marginTop: theme.spacing(5),
    },
  },
  image: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  name: {
    color: "#e3e3de",
  },
  text: {
    color: "#98a6ad",
  },
  icon: {
    color: "#98a6ad",
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Avatar alt="Meet Patel" src={meet} className={classes.image} />
      </Grid>
      <Grid item>
        <Typography variant="h3" className={classes.name}>
          Meet Patel
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Software Developer
        </Typography>
      </Grid>
      <Grid item>
        <a href="https://www.github.com/meet1807">
          <GitHub className={classes.icon} />
        </a>
        <a href="https://www.linkedin.com/in/meet1807/">
          <LinkedIn className={classes.icon} />
        </a>

        <Mail className={classes.icon} />
        <a href="https://twitter.com/meet_mist">
          <Twitter className={classes.icon} />
        </a>
        <a href="https://www.instagram.com/_mit777/">
          <Instagram className={classes.icon} />
        </a>
      </Grid>
    </Grid>
  );
};

export default About;
