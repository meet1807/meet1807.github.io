import React from "react";
import { Grid, Avatar, makeStyles, Typography, Box } from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Twitter, Instagram } from "@material-ui/icons";
import meet from "../static/meet.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),
    borderTopWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
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
          <Box fontWeight="fontWeightBold" fontSize="h3.fontSize">
            Meet Patel
          </Box>
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Software Developer
        </Typography>
      </Grid>
      <Grid item>
        <GitHub className={classes.icon} />
        <LinkedIn className={classes.icon} />
        <Mail className={classes.icon} />
        <Twitter className={classes.icon} />
        <Instagram className={classes.icon} />
      </Grid>
    </Grid>
  );
};

export default About;
