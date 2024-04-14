import "./App.css";
import * as React from "react";
import Navbar from "./components/Navbar.tsx";
import Sidebar from "./components/Sidebar.tsx";
import Carousel from "./components/Carousel.tsx";
import { MdDesignServices } from "react-icons/md";
import profile from "./assets/jk_headshot.jpg";

import { motion, useInView } from "framer-motion";
import Contact from "./components/Contact";
import { useRef } from "react";
import content from "./content/static.json";
import parse from "html-react-parser";
import Lottie from "react-lottie";
import * as lottie1 from "./assets/lotties/Animation - 1713118521359.json";
import * as lottie2 from "./assets/lotties/Animation - 1713118593518.json";
import * as lottie3 from "./assets/lotties/Animation - 1713119644289.json";

function App() {
  const ref = useRef(null);
  const isinView = useInView(ref);

  function lottieFactory(animationData: string) {
    return {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, translateY: -100 },
    show: { opacity: 1, translateY: 0 },
  };

  return (
    <div className="">
      <Navbar />
      <Sidebar isinView={isinView} />
      <div
        id="scroll-container"
        className="snap-y snap-mandatory max-h-screen w-full overflow-scroll scroll-smooth overflow-x-hidden"
      >
        <div
          id="about-portion"
          className="relative h-[100vh] snap-start flex flex-col justify-center items-center md:items-stretch md:gap-10 gap-8"
        >
          <div className="flex w-[80%] md:ml-[20%] items-center md:gap-20 gap-8 md:flex-row flex-col-reverse">
            <motion.div
              className="md:w-[50%] md:min-w-[320px] md:max-w-[420px] flex flex-col grow-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-[#EE4E2E]">{content.about.intro1}</p>
              <p className="text-white text-center font-Proxima font-extrabold text-[96px] p-0 leading-none">
                {content.about.name}
              </p>
              <p className="text-end font-bold text-3xl">
                {content.about.role}
              </p>
            </motion.div>
            <motion.div
              className="w-60 h-60 relative hover:scale-110 md:grayscale md:hover:grayscale-0 hover:ease-in-out hover:duration-500 hover:drop-shadow-2xl"
              initial={{ scale: 0.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.3, type: "spring" }}
            >
              <img
                className="rounded-full z-10 object-cover"
                src={profile}
                alt="profilepic"
              />
            </motion.div>
          </div>
          <div className="hidden md:block">
            <p className="md:ml-[20%]">{parse(content.about.desc)}</p>
          </div>
          {/* Web Position */}
          <motion.div
            className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-[-100px] md:text-[150px] text-[70px] opacity-25 hidden md:block"
            initial={{ translateX: -300 }}
            whileInView={{ translateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 0.5,
              ease: "easeOut",
            }}
          >
            {content.about.page}
          </motion.div>
        </div>
        {/* Mobile Position appears*/}
        <div className="md:hidden relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <motion.div
            className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-16 md:text-[150px] text-[70px] opacity-25"
            initial={{ translateX: -300 }}
            whileInView={{ translateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 0.5,
              ease: "easeOut",
            }}
          >
            {content.about.page}
          </motion.div>
          <div className="w-[80%]">
            <p className="font-bold text-3xl">{content.about.desc}</p>
          </div>
        </div>
        <div
          id="skills-portion"
          className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center"
        >
          <motion.div
            className="font-thin absolute md:left-[15%] left-2 md:bottom-1 bottom-16 md:text-[150px] text-[70px] opacity-25"
            initial={{ translateX: 300 }}
            whileInView={{ translateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 0.5,
              ease: "easeOut",
            }}
          >
            {content.skills.page}
          </motion.div>
          <motion.div
            className="absolute"
            initial={{ scale: 0.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <MdDesignServices className="text-[15rem] opacity-5 text-white" />
          </motion.div>
          <div className="flex flex-col w-[80%] md:h-[55%] h-[65%] justify-center items-center gap-5 mb-[100px]">
            {/* Mobile Version */}
            <div className="flex justify-center items-center gap-3 text-white md:hidden mr-8">
              <span className="grow">Figma</span>
              <span className="grow">Gimp</span>
              <span className="grow">Blender</span>
              <span className="grow">Inkscape</span>
            </div>
            <motion.div
              className="font-extrabold md:text-6xl text-5xl pr-[40%] text-[#5EB1BF]"
              initial={{ translateX: -300 }}
              whileInView={{ translateX: 0 }}
            >
              {content.skills.mainSkill1}
            </motion.div>
            {/* web Version */}
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
            <motion.div
              className="font-extrabold md:text-6xl text-5xl md:pl-[43%] pl-[5%] text-[#EE4E2E]"
              initial={{ translateX: 300 }}
              whileInView={{ translateX: 0 }}
            >
              {content.skills.mainSkill2}
            </motion.div>
            <div className="grid grid-cols-3 grid-rows-3 grid-flow-col left-10 items-end text-white md:hidden gap-x-6 text-center w-[80%]">
              <span>Node.js</span>
              <span>Javascript</span>
              <span>HTML</span>
              <span>Flow</span>
              <span>React</span>
              <span>CSS</span>
              <span>Express.js</span>
              <span>Next.js</span>
              <span>TailwindCSS</span>
            </div>
          </div>
        </div>
        <div
          id="projects-portion"
          className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center"
        >
          <motion.div
            className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-16 md:text-[150px] text-[70px] opacity-25"
            initial={{ translateX: -300 }}
            whileInView={{ translateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 0.5,
              ease: "easeOut",
            }}
          >
            {content.projects.page}
          </motion.div>
          <motion.div
            className="md:flex w-[80%] gap-16 justify-center md:flex-row hidden"
            variants={container}
            initial="hidden"
            whileInView="show"
          >
            <motion.div
              className="text-center hover:drop-shadow-2xl"
              variants={item}
            >
              <div className="w-60 h-60 bg-[#5EB1BF] opacity-30">
                <Lottie
                  options={lottieFactory(lottie1)}
                  isStopped={false}
                  isPaused={false}
                />
              </div>
              <p className="mt-3">In Progress</p>
            </motion.div>
            <motion.div
              className="text-center hover:drop-shadow-2xl"
              variants={item}
            >
              <div className="w-60 h-60 bg-[#EE4E2E] opacity-30">
                <Lottie
                  options={lottieFactory(lottie2)}
                  isStopped={false}
                  isPaused={false}
                />
              </div>
              <p className="mt-3">Coding it out</p>
            </motion.div>
            <motion.div
              className="text-center hover:drop-shadow-2xl"
              variants={item}
            >
              <div className="w-60 h-60 bg-[#5EB1BF] opacity-30">
                <Lottie
                  options={lottieFactory(lottie3)}
                  isStopped={false}
                  isPaused={false}
                />
              </div>
              <p className="mt-3">Working on it</p>
            </motion.div>
          </motion.div>
          <Carousel />
        </div>
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
