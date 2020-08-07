import React from "react";

import {
  makeStyles,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
  Paper,
  CardActions,
  //IconButton,
  Button,
  Grid,
} from "@material-ui/core";

//import ShareIcon from "@material-ui/icons/Share";
//import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    maxWidth: 345,
    margin: theme.spacing(2),
    backgroundColor: "#282c34",
  },
  media: {
    height: 0,
    objectFit: "cover",
    paddingTop: "56.25%", // 16:9
  },
  title: {
    color: "#98a6ad",
    marginLeft: theme.spacing(2),
    fontSize: theme.spacing(2.5),
  },
  content: {
    color: "#e3e3de",
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },

  icon: {
    color: "#98a6ad",
    fontSize: theme.spacing(3),
  },

  paper: {
    maxHeight: 300,
    margin: 0,
    overflow: "auto",
    backgroundColor: "#282c34",
    "&::-webkit-scrollbar": {
      width: "0.4em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
    body: {
      alignSelf: "end",
      textAlign: "center",
    },
  },
}));

const Cards = ({ projects }) => {
  const classes = useStyles();

  return projects.map((project, index) => (
    <Card
      className={classes.root}
      key={`card${index}`}
      variant="elevation"
      elevation={5}
      data-aos="fade-up"
    >
      <Box variant="div" style={{ display: "grid" }}>
        <div className={classes.body}>
          <CardActionArea>
            <CardMedia
              key={`media${index}`}
              className={classes.media}
              image={require(`../../images/${project.image}`)}
              title={project.title}
            />
          </CardActionArea>

          <CardContent>
            <Box py={2}>
              <Typography key={`title${index}`} className={classes.title}>
                {project.title}
              </Typography>
            </Box>

            <Paper className={classes.paper} elevation={0}>
              <Typography
                key={`content${index}`}
                className={classes.content}
                align="left"
              >
                {project.description}
              </Typography>
            </Paper>
          </CardContent>
        </div>
        <CardActions
          disableSpacing
          style={{ display: "flex", alignSelf: "end" }}
        >
          <Grid container>
            <Box component="div" ml={1}>
              <Button
                size="small"
                href={project.github}
                style={{ color: "#98a6ad" }}
              >
                GitHub
              </Button>
              <Button
                size="small"
                href={project.link}
                style={{ color: "#98a6ad" }}
              >
                Live - App
              </Button>
            </Box>
          </Grid>
          {/* <IconButton aria-label="share" style={{ flex: 1 }}>
            <ShareIcon className={classes.icon} />
          </IconButton> */}
        </CardActions>
      </Box>
    </Card>
  ));
};

export default Cards;
