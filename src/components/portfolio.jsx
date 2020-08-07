import React from "react";
import { Grid } from "@material-ui/core";

import About from "./about";
import Introduction from "./introduction";
import Skills from "./skills";
import Experience from "./experience";
import Projects from "./projects";
import Accomplishments from "./accomplishments";
import Achievements from "./Achievements";

const Portfolio = () => {
  return (
    <Grid container>
      <Grid item container>
        <Grid item xs={12} lg={4}>
          <About />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Introduction />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} data-aos="zoom-in-up">
        <Skills />
      </Grid>
      <Grid item xs={12} sm={12} data-aos="fade-up">
        <Experience />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Projects />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Accomplishments />
      </Grid>
      <Grid item xs={12} sm={12}>
        <Achievements />
      </Grid>
    </Grid>
  );
};

export default Portfolio;
