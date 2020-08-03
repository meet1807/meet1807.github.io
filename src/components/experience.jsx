import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Steper from "./common/steper";

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
    marginLeft: theme.spacing(11),
    fontWeight: "fontWeightMedium",
  },
  step: {
    backgroundColor: "#282c34", //"#272935",
  },

  title: {
    color: "#98a6ad",
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(2.5),
  },

  content: {
    color: "#e3e3de",
    fontSize: theme.spacing(2.2),
    marginLeft: theme.spacing(2),
  },

  icon: {
    color: "#98a6ad",
    fontSize: theme.spacing(1.5),
    marginLeft: theme.spacing(1),
  },
}));

const Experience = () => {
  const job = [
    {
      title: "Software Developer",
      company: "CricGif",
      year: "July 2019 - Current",
      description: [
        `
      Building React application for project demonstration and digital advertisements, promoted growth by 20% resulting
  in 15% of annual revenue increase.`,
        `
  Designed and Built embedded software using C# to quickly extract and manage the sensor’s data, accelerated
  workflow by 10-15%.`,
      ],
    },
    {
      title: "Software Developer",
      company: "Nextech Innovation",
      year: "Jun 2017 - Jul 2018",
      description: [
        `
      Built python application for project demonstration and digital advertisements, promoted growth by 20% resulting
  in 15% of annual revenue increase.`,
        `
  Designed and Built embedded software using C# to quickly extract and manage the sensor’s data, accelerated
  workflow by 10-15%.`,
      ],
    },
  ];

  const classes = useStyle();

  return (
    <Grid container className={classes.root} direction="row" justify="center">
      <Grid item xs={12} lg={4}>
        <Typography variant="h3" className={classes.heading} align="left">
          Experience
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={8}>
        <Grid item sm={3} />
        <Grid item xs={12} sm={8} lg={10}>
          <Steper steps={job} />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Experience;
