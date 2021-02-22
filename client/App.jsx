import React from "react";
import Projects from "./containers/Projects.jsx"
import Intro from "./containers/Intro.jsx"
import Skills from "./containers/Skills.jsx"
import Contact from "./containers/Contact.jsx"

function App() {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
