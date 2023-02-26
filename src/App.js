import "./App.css";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Carousel from "./components/Carousel.js";
import { MdDesignServices } from 'react-icons/md'
import profile from './images/jk_headshot.jpg'

import { motion, useInView } from "framer-motion";
import Contact from "./components/Contact";
import { useRef } from "react";

function App() {
  const ref = useRef(null)
  const isinView = useInView(ref)

  return (
    <div className="">
      <Navbar />
      <Sidebar isinView={isinView} />
      <div id="scroll-container" className="snap-y snap-mandatory max-h-screen w-full overflow-scroll scroll-smooth overflow-x-hidden">
        <div id='about-portion' className="relative h-[100vh] snap-start flex flex-col justify-center items-center md:items-stretch md:gap-10 gap-8">
          <motion.div className="font-thin absolute md:left-[10%] left-2 md:bottom-1 bottom-16 md:text-[150px] text-[80px] opacity-10 z-10 md:hidden"
          initial={{translateX:300}}
          whileInView={{translateX: 0}}
          transition={{type:'spring', stiffness: 50, mass: 0.5, ease: "easeOut"}}>WELCOME</motion.div>
          <div className="flex w-[80%] md:ml-[20%] items-center md:gap-20 gap-8 md:flex-row flex-col-reverse">
            <motion.div className="md:w-[50%] md:min-w-[320px] md:max-w-[420px] flex flex-col grow-0"
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{delay: 1}}
              viewport= {{once: true}}>
              <p className="text-[#EE4E2E]">Hi, my name is</p>
              <p className="text-white text-center font-Proxima font-extrabold text-[96px] p-0 leading-none">JINKAI</p>
              <p className="text-end font-bold text-3xl">Web Developer</p>
            </motion.div>
            <div className="w-48 h-48 relative hover:scale-110 grayscale hover:grayscale-0">
              <img className="rounded-full z-10 object-cover" src={profile} alt="profilepic" />
            </div>
          </div>
          <div className="hidden md:block">
            <p className="md:ml-[20%]">I specialize in building and desiging<br />interfaces for exceptional digital experiences</p>
          </div>
          {/* Web Position */}
          <motion.div className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-[-100px] md:text-[150px] text-[80px] opacity-10 hidden md:block"
          initial={{translateX:-300}}
          whileInView={{translateX: 0}}
          transition={{type:'spring', stiffness: 50, mass: 0.5, ease: "easeOut"}}>ABOUT</motion.div>
        </div>
        {/* Mobile Position appears*/}
        <div className="md:hidden relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <motion.div className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-16 md:text-[150px] text-[80px] opacity-10 "
          initial={{translateX:-300}}
          whileInView={{translateX: 0}}
          transition={{type:'spring', stiffness: 50, mass: 0.5, ease: "easeOut"}}>ABOUT</motion.div>
          <div className="w-[80%]">
            <p className="font-bold text-3xl">I specialize in building and desiging<br />interfaces for exceptional digital experiences</p>
          </div>
        </div>
        <div id='skills-portion' className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <motion.div className="font-thin absolute md:left-[10%] left-2 md:bottom-1 bottom-16 md:text-[150px] text-[80px] opacity-10"
          initial={{translateX:300}}
          whileInView={{translateX: 0}}
          transition={{type:'spring', stiffness: 50, mass: 0.5, ease: "easeOut"}}>SKILLS</motion.div>
          <MdDesignServices className="absolute text-[200px] opacity-25"/>
          <div className="flex flex-col w-[80%] md:h-[55%] h-[65%] justify-center items-center gap-5">
            <div className="font-extrabold md:text-6xl text-5xl pr-[40%] text-[#5EB1BF]">Design</div>
            <div className="md:flex justify-center align-middle gap-10 grow w-full hidden">
              <div className="flex flex-col justify-center items-center basis-1/3 gap-3 text-white">
                <span className="grow">Figma</span>
                <span className="grow">Gimp</span>
                <span className="grow">Blender</span>
                <span className="grow">Inkscape</span>
              </div>
              <div className="grid grid-cols-3 grid-rows-4 grid-flow-col left-10 items-center text-white">
                <span className="row-start-2 row-end-2">Node.js</span>
                <span className="row-start-3 row-end-3">Javascript</span>
                <span className="row-start-4 row-end-4">HTML</span>
                <span className="row-start-2 row-end-2">Flow</span>
                <span className="row-start-3 row-end-3">React</span>
                <span className="row-start-4 row-end-4">CSS</span>
                <span className="row-start-2 row-end-2">Express.js</span>
                <span className="row-start-3 row-end-3">Next.js</span>
                <span className="row-start-4 row-end-4">TailwindCSS</span>
              </div>
            </div>
            <div className="font-extrabold md:text-6xl text-5xl md:pl-[43%] pl-[15%] text-[#EE4E2E]">Engineering</div>
          </div>
        </div>
        <div id='projects-portion' className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <motion.div className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-16 md:text-[150px] text-[80px] opacity-10"
          initial={{translateX:-300}}
          whileInView={{translateX: 0}}
          transition={{type:'spring', stiffness: 50, mass: 0.5, ease: "easeOut"}}>PROJECTS</motion.div>
          <div className="md:flex w-[80%] gap-16 justify-center md:flex-row hidden">
            <div className="text-center">
              <div className="w-60 h-60 bg-[#5EB1BF] opacity-30"></div>
              <p className="mt-3">Project text 1</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 bg-[#EE4E2E] opacity-30"></div>
              <p className="mt-3">Project text 2</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 bg-[#5EB1BF] opacity-30"></div>
              <p className="mt-3">Project text 3</p>
            </div>
          </div>
          <Carousel />
        </div>
        <div id='contact-portion' className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <Contact ref={ref}/>
        </div>
      </div>
    </div>
  );
}

export default App;
