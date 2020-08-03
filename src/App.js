import React from "react";
import About from "./components/about";
import { Grid } from "@material-ui/core";
import "./App.css";
import Introduction from "./components/introduction";
import Skills from "./components/skills";
import Experience from "./components/experience";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fab, faDatabase);
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
          <Grid item xs={12} sm={12}>
            <Skills />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Experience />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
