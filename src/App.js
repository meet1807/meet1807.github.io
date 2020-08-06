import React, { useEffect } from "react";
import About from "./components/about";
import { Grid } from "@material-ui/core";
import "./App.css";
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Experience from "./components/experience";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Projects from "./components/projects";
import Accomplishments from "./components/accomplishments";
import Achievements from "./components/Achievements";

import Aos from "aos";

library.add(fab, faDatabase);

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "linear", once: true });
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
