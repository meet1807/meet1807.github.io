import React, { useState } from "react";
import {
  Grid,
  Avatar,
  makeStyles,
  Typography,
  Button,
  Popover,
} from "@material-ui/core";
import { GitHub, LinkedIn, Mail, Twitter, Instagram } from "@material-ui/icons";
import meet from "../images/meet.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: theme.spacing(12),

    "& > *": {
      marginTop: theme.spacing(3),
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
    backgroundColor: "transparent",
  },
  image: {
    width: theme.spacing(28),
    height: theme.spacing(28),
  },
  name: {
    color: "#e3e3de",
  },
  text: {
    color: "#98a6ad",
  },
  icon: {
    color: "#98a6ad",
    fontSize: theme.spacing(5),
    marginLeft: theme.spacing(2),
  },
}));

const About = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid
      item
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <Avatar alt="Meet Patel" src={meet} className={classes.image} />
      </Grid>
      <Grid item>
        <Typography variant="h3" className={classes.name}>
          Meet Patel
        </Typography>
        <Typography variant="h5" className={classes.text}>
          Software Developer
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          color="inherit"
          href="#resume"
          className={classes.text}
        >
          Resume
        </Button>
      </Grid>
      <Grid item>
        <a
          href="https://www.github.com/meet1807"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub className={classes.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/meet1807/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className={classes.icon} />
        </a>

        <Mail
          className={classes.icon}
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
          onClick={() => {
            navigator.clipboard.writeText("meetp6767@gmail.com");
          }}
        />
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography variant="h6" className={classes.text}>
            meetp6767@gmail.com
          </Typography>
        </Popover>

        <a
          href="https://twitter.com/meet_mist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter className={classes.icon} />
        </a>
        <a
          href="https://www.instagram.com/_mit777/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className={classes.icon} />
        </a>
      </Grid>
    </Grid>
  );
};

export default About;
