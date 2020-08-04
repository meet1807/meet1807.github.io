import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import Papers from "./common/papers";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(5),

    "& > *": {
      marginTop: theme.spacing(5),
    },
  },
  heading: {
    color: "#96a6ad",

    marginRight: theme.spacing(2),
    fontWeight: "fontWeightMedium",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(11),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
    },
  },
}));

const Accomplishments = () => {
  const classes = useStyle();

  const certificates = [
    {
      title: "Deep Learning A-Z: Hands On Artificial Neural Networks",
      date: `Udemy • August 2020`,
      certificate: ``,
    },
    {
      title: "Python",
      date: `CodeWithMosh • July 2020`,
      certificate: ``,
    },
    {
      title: "Object Oriented Programming with JavaScript",
      date: `CodeWithMosh • June 2020`,
      certificate: ``,
    },
    {
      title: "React Js",
      date: `CodeWithMosh • August 2020`,
      certificate: ``,
    },
    {
      title: "Node Js",
      date: `CodeWithMosh • August 2020`,
      certificate: ``,
    },
  ];

  return (
    <Grid container className={classes.root} direction="row" justify="center">
      <Grid item xs={12} lg={4}>
        <Typography variant="h3" className={classes.heading} align="left">
          Accomplishments
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={8}>
        <Grid item sm={3} />
        <Grid item xs={12} sm={8}>
          <Papers certificates={certificates} />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Accomplishments;
