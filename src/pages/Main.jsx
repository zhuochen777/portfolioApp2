import React from "react";
import Home from "../component/sections/Home";
import About from "../component/sections/About";
import Work from "../component/sections/work/Work";
import Skill from "../component/sections/Skill";
import Contact from "../component/sections/Contact";

export default function Main() {
  return (
    <>
      <div style={{ backgroundColor: "#f0efeb" }}>
        <Home />
        <About />
        <Work />
        <Skill />
        <Contact />
      </div>
    </>
  );
}
