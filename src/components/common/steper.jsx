import React from "react";
import { FiberManualRecord } from "@material-ui/icons";
import {
  Stepper,
  Step,
  StepContent,
  StepLabel,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  step: {
    backgroundColor: "#282c34", //"#272935",
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
    fontSize: theme.spacing(1.5),
    marginLeft: theme.spacing(2),
  },
}));

const Steper = ({ steps }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Stepper className={classes.step} orientation="vertical">
        {steps.map((label, i) => (
          <Step active={true} key={i}>
            <StepLabel>
              <Typography
                key={`title${i}`}
                align="left"
                className={classes.title}
              >
                {label.title}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography
                key={`company${i}`}
                align="left"
                className={classes.content}
              >
                {label.company}
              </Typography>
              <Typography
                key={`year${i}`}
                align="left"
                className={classes.content}
              >
                {label.year}
              </Typography>

              <Box mt={3}>
                {label.description.map((d, e) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <Box mt={0.4}>
                      <FiberManualRecord
                        key={`bullet$`}
                        className={classes.icon}
                      />
                    </Box>
                    <Typography align="left" className={classes.content}>
                      {d}
                    </Typography>
                  </div>
                ))}
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Steper;
