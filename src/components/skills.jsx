import React from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(10),
    borderTopWidth: 1,
    borderColor: "red",
    borderStyle: "solid",
  },

  heading: {
    color: "#96a6ad",
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
    >
      <Typography variant="h3" className={classes.heading}>
        <Box fontWeight="fontWeightMedium" fontSize="h3.fontSize">
          Skills
        </Box>
      </Typography>
      <i className="fab fa-python"></i>
      <i className="fab fa-java"></i>
      <i className="fab fa-js-square"></i>
    </Grid>
  );
};

export default Skills;
