import React from "react";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import ProjectList from "./components/ProjectList/ProjectList.js";
import Skills from "./components/Skills/Skills.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About />
      <ProjectList />
      <Skills></Skills>
      <Contact></Contact>
    </div>
  );
}

export default App;
