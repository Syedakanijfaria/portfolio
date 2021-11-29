import React from "react";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Projects from "./components/Projects/Projects.js";
import Skills from "./components/Skills/Skills.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About />
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
