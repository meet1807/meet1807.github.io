import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: theme.spacing(2),
    backgroundColor: "#282c34",
  },
  media: {
    height: 0,
    objectFit: "contain",
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
    marginLeft: theme.spacing(2),
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
      <CardActionArea>
        <CardMedia
          key={`media${index}`}
          className={classes.media}
          image={require(`../../images/${project.image}`)}
          title={project.title}
        />
      </CardActionArea>
      <Box height="50%">
        <CardContent>
          <Box py={2}>
            <Typography key={`title${index}`} className={classes.title}>
              {project.title}
            </Typography>
          </Box>

          <Typography
            key={`content${index}`}
            className={classes.content}
            align="left"
          >
            {project.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  ));
};

export default Cards;
