import * as React from "react";
import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md";
import content from "../content/static.json";

export default function SkillsSection() {
  return (
    <div
      id="skills-portion"
      className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center"
    >
      <motion.div
        className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-12 md:text-[150px] text-[70px] opacity-25"
        initial={{ translateX: -300 }}
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
          <div className="grid grid-cols-3 grid-rows-4 grid-flow-col left-10 items-center text-white gap-x-5 gap-y-5">
            <span className="row-start-1 row-end-1">Swift</span>
            <span className="row-start-2 row-end-2">NodeJS</span>
            <span className="row-start-3 row-end-3">Javascript</span>
            <span className="row-start-4 row-end-4">HTML</span>
            <span className="row-start-1 row-end-1">UiKit</span>
            <span className="row-start-2 row-end-2">TypeScript</span>
            <span className="row-start-3 row-end-3">React</span>
            <span className="row-start-4 row-end-4">CSS</span>
            <span className="row-start-1 row-end-1">Combine</span>
            <span className="row-start-2 row-end-2">Java</span>
            <span className="row-start-3 row-end-3">Spring</span>
            <span className="row-start-4 row-end-4">Redux</span>
          </div>
        </div>
        <motion.div
          className="font-extrabold md:text-6xl text-5xl md:pl-[43%] pl-[5%] text-[#EE4E2E]"
          initial={{ translateX: 300 }}
          whileInView={{ translateX: 0 }}
        >
          {content.skills.mainSkill2}
        </motion.div>
        <div className="grid grid-cols-3 grid-rows-4 grid-flow-col left-10 items-end text-white md:hidden gap-x-6 gap-y-5 text-center w-[80%]">
          <span>Swift</span>
          <span>NodeJS</span>
          <span>Javascript</span>
          <span>HTML</span>
          <span>UiKit</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>CSS</span>
          <span>Java</span>
          <span>Spring</span>
          <span>Redux</span>
        </div>
      </div>
    </div>
  );
}
