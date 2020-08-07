import React, { useEffect } from "react";
import Portfolio from "./components/portfolio";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import Aos from "aos";
import "./App.css";

library.add(fab, faDatabase);

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "linear", once: true });
  }, []);

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
