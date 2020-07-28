import React from "react";
import {
  Grid,
  List,
  Typography,
  makeStyles,
  ListItem,
} from "@material-ui/core";
import { School } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  heading: {
    color: "#98a6ad",
    marginLeft: theme.spacing(5),
  },
  title: {
    color: "#98a6ad",
    marginLeft: theme.spacing(2),
  },

  content: {
    color: "#e3e3de",
    fontSize: theme.spacing(2.2),
    marginLeft: theme.spacing(2),
  },
  icon: {
    color: "#98a6ad",
    fontSize: theme.spacing(5),
  },
}));

const Edu = () => {
  const education = [
    {
      university: "Lakehead University",
      degree: "M.Sc. Computer Science, 2020",
    },
    {
      university: "Vadodara Institute of Engineering",
      degree: "B.E. Computer Engineering, 2017",
    },
  ];
  const classes = useStyle();
  return (
    <Grid item xs={12} sm={7}>
      <Typography variant="h4" className={classes.heading} align="left">
        Education
      </Typography>
      <List>
        {education.map((value, key) => (
          <ListItem key={`list${key}`}>
            <Grid container key={`container${key}`}>
              <Grid item key={`item${key}`}>
                <School key={`school${key}`} className={classes.icon} />
              </Grid>
              <Grid item key={`edu${key}`}>
                <Typography
                  key={value.degree}
                  className={classes.content}
                  align="left"
                >
                  {value.degree}
                </Typography>
                <Typography
                  key={value.university}
                  className={classes.title}
                  align="left"
                >
                  {value.university}
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};

export default Edu;
