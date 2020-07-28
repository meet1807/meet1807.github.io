import React from "react";
import About from "./components/about";
import { Grid } from "@material-ui/core";
import "./App.css";
import Introduction from "./components/introduction";
import Skills from "./components/skills";

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <Grid item container>
          <Grid item xs={12} sm={4}>
            <About />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Introduction />
          </Grid>
        </Grid>

        <Skills />
      </Grid>
    </div>
  );
}

export default App;
