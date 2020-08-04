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
      marginLeft: theme.spacing(6),
    },
  },
}));

const Achievements = () => {
  const classes = useStyle();

  const achievements = [
    {
      title: "TOP 10 PROJECTS OF GUJARAT for “Neuroimaging controlled device”",
      date: `NASSCOM • June 2017`,
      details: `Led a team to build brainwave-controlled device for disabled person using python machine learning & raspberry pi`,
      certificate: ``,
    },
    {
      title: "NATIONAL WINNER of “Chai-Yo: Clean Energy Recharging World",
      date: `Doordarshan • March 2016`,
      details: `Built Eco robot which crosses path containing hills, slops, highland as well as cruising along river holding wind turbine
        propeller which will be placed on the top of the wind turbine pole using Hybrid robot`,
      certificate: ``,
    },
  ];

  return (
    <Grid container className={classes.root} direction="row" justify="center">
      <Grid item xs={12} lg={4}>
        <Typography variant="h3" className={classes.heading} align="left">
          Achievements
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={8}>
        <Grid item sm={3} />
        <Grid item xs={12} sm={8}>
          <Papers certificates={achievements} />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Achievements;
