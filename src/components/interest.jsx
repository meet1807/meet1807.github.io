import React from "react";
import {
  Grid,
  List,
  Typography,
  makeStyles,
  ListItem,
} from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  heading: {
    color: "#98a6ad",
    marginLeft: theme.spacing(5),
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

const Interest = () => {
  const interest = [
    "Software Development",
    "Machine Learning",
    "Computer Vision",
  ];
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={5}>
      <Typography variant="h4" className={classes.heading} align="left">
        Interest
      </Typography>
      <List>
        {interest.map((i, e) => (
          <ListItem key={e + i}>
            <FiberManualRecord key={`bullet${e}`} className={classes.icon} />
            <Typography key={e} className={classes.content} align="left">
              {i}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Interest;
