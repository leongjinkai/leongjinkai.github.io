import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import { useInView } from "framer-motion";
import Contact from "./components/Contact";
import { useRef } from "react";
import AboutSection from "./sections/AboutSection.tsx";
import SkillsSection from "./sections/SkillsSection.tsx";
import ProjectSection from "./sections/ProjectSection.tsx";
import ExperienceSection from "./sections/ExperienceSection.tsx";

function App() {
  const ref = useRef(null);
  const isinView = useInView(ref);

  return (
    <div className="">
      <Navbar />
      <Sidebar isinView={isinView} />
      <div
        id="scroll-container"
        className="snap-y snap-mandatory max-h-screen w-full overflow-scroll scroll-smooth overflow-x-hidden"
      >
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <div
          id="contact-portion"
          className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center"
        >
          <Contact ref={ref} />
        </div>
      </div>
    </div>
  );
}

export default App;
