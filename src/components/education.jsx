import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Interest from "./interest";
import Edu from "./edu";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& > *": {
      marginTop: theme.spacing(5),
    },
  },
}));

const Education = () => {
  const classes = useStyle();
  return (
    <Grid container direction="row" className={classes.root}>
      <Interest />
      <Edu />
    </Grid>
  );
};

export default Education;
