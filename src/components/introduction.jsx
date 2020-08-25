import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import Education from "./education";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),

    "& > *": {
      marginTop: theme.spacing(5),
    },
  },

  heading: {
    color: "#98a6ad",
    marginLeft: theme.spacing(5),
  },

  content: {
    color: "#e3e3de",
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
  },
}));

const Introduction = () => {
  const classes = useStyle();
  return (
    <Grid item container className={classes.root} data-aos="fade-up">
      <Grid item>
        <Typography variant="h3" className={classes.heading}>
          <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
            Who Am I?
          </Box>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" className={classes.content} align="justify">
          An enthusiastic person in computer sciecnce with a degree of master's
          who loves to build things to solve real life Problems. I love
          exploring new techonlogies and integrating machine learning and
          computer vision techniques to bring it to life.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" className={classes.content} align="justify">
          When I'm not hammering my keyboard I watch and play counter strike,
          listen music, follow trail and learn interesting things.
        </Typography>
      </Grid>
      <Grid item container direction="row" flex={1}>
        <Education />
      </Grid>
    </Grid>
  );
};

export default Introduction;
