import * as React from "react";
import { motion } from "framer-motion";
import content from "../content/static.json";
import Carousel from "../components/Carousel.tsx";
import * as lottie1 from "../assets/lotties/Animation - 1713118521359.json";
import * as lottie3 from "../assets/lotties/Animation - 1713119644289.json";
import Lottie from "react-lottie";
import ReactPlayer from 'react-player';

export default function ProjectSection() {
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

  return (
    <div
      id="projects-portion"
      className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center"
    >
      <motion.div
        className="font-thin absolute md:left-[15%] left-2 md:bottom-1 bottom-12 md:text-[150px] text-[70px] opacity-25"
        initial={{ translateX: 300 }}
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
          <p className="mt-3">{content.projects.project1Title}</p>
        </motion.div>
        <motion.div
          className="text-center hover:drop-shadow-2xl"
          variants={item}
        >
          <ReactPlayer
            className='w-60 h-60 react-player fixed-bottom flex justify-center bg-white'
            url= '/swiper-demo.MP4'
            controls = {true}
            width="300px"
            height="300px"
            />
          <p className="mt-3">{content.projects.project2Title}</p>
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
          <p className="mt-3">{content.projects.project3Title}</p>
        </motion.div>
      </motion.div>
      <Carousel />
    </div>
  );
}
