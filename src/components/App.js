import React from "react";

import Title from "./Title";
import Intro from "./Intro";
import Skills from "./Skills";
import Philosophy from "./Philosophy";
import Projects from "./Projects";
import Contact from "./Contact";

import "../assets/stylesheets/portfolio.css";

const App = () => {
  return (
    <div className={"app"}>
      <Title />
      <Skills />
      <Intro />
      <Projects />
      <Philosophy />
      <Contact />
    </div>
  );
};

export default App;
