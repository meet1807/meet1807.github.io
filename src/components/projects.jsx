import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Cards from "./common/cards";

const useStyles = makeStyles((theme) => ({
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
}));

const Projects = () => {
  const classes = useStyles();

  const projects = [
    {
      image: "movie.jpg",
      title: "Movie Box – A movie rental app",
      description: `•	Built full stack application for movie rental service using React, Node JS  and Express JS.
          • Built database in MongoDB and performed CRUD operations on user database.
          •	Implemented lazy loading (Load images only when in viewport) for minimize network usage and maximize performance to load website faster.`,
      github: "https://github.com/meet1807/app-moviebox",
      link: "https://app-moviebox.herokuapp.com/home",
    },
    {
      image: "covid.PNG",
      title: "Covid-19 Tracker",
      description: `Built a React JS (Front End) application for visualizing covid-19 data using Material UI, and Charts Js.
        • Fetched data from REST APIs and visualized them using charts`,
      github: "https://github.com/meet1807/covid-19",
      link: "https://covid-19-bc826.web.app/",
    },
    {
      image: "portfolio.PNG",
      title: "Portfolio Design",
      description: `Built a React JS (Front End) application for showcasing skillsets using Material UI.`,
      github: "https://github.com/meet1807/portfolio",
      link: "https://meet1807.github.io",
    },
    {
      image: "sr.jpg",
      title: "Deep Video Super Resolution",
      description: `Developed a Python web-app for enhanced video super-resolution to reveal blurry details using OpenCV.
        • Integrated PyTorch to accomplish super-resolution using CNN framework with motion compensation.
        • The model was trained on 2M 3-frame sequence image training dataset as well as 15k video frames.`,
    },
    {
      image: "stroke.jpg",
      title: "Stroke Prediction",
      description: `Analyzed healthcare datasets and built a machine learning model for stroke prediction.
      • Built Python web app and performed logistic regression & decision tree to predict strokes.
      • Evaluated our model using performance measurement techniques like ROC – achieved AUC 98.38%.`,
    },
  ];

  return (
    <Grid container className={classes.root} direction="row" justify="center">
      <Grid item xs={12} lg={3}>
        <Typography variant="h3" className={classes.heading} align="left">
          Projects
        </Typography>
      </Grid>
      <Grid item container xs={12} lg={9}>
        <Grid item sm={1} lg={false} />
        <Grid item container xs={12} sm={10} lg={12} justify="center">
          <Cards projects={projects} />
        </Grid>
        <Grid item sm={1} />
      </Grid>
    </Grid>
  );
};

export default Projects;
