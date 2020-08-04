import React from "react";
import { Paper, makeStyles, Typography, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    margin: theme.spacing(2),
    backgroundColor: "#282c34",
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  title: {
    color: "#98a6ad",
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(2.5),
  },
  content: {
    color: "#e3e3de",
    fontSize: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },

  button: {
    color: "#e3e3de",
    marginLeft: theme.spacing(2),
  },
}));

const Papers = ({ certificates }) => {
  const classes = useStyles();
  return certificates.map((certificate, index) => (
    <Paper
      className={classes.root}
      elevation={5}
      key={index}
      data-aos="fade-up"
    >
      <Grid container direction="column" align="left">
        <Grid item>
          <Typography key={`title${index}`} className={classes.title}>
            {certificate.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography key={`date${index}`} className={classes.content}>
            {certificate.date}
          </Typography>
        </Grid>
        <Grid item>
          <Typography key={`date${index}`} className={classes.content}>
            {certificate.details}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            size="small"
            variant="text"
            key={`certi${index}`}
            className={classes.button}
          >
            certificate
          </Button>
        </Grid>
      </Grid>
    </Paper>
  ));
};

export default Papers;
