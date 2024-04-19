import * as React from "react";
import { motion } from "framer-motion";
import { MdDesignServices } from "react-icons/md";
import content from "../content/static.json";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoRedux } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import { BiLogoBlender } from "react-icons/bi";
import { FaSwift } from "react-icons/fa";
import { FaUikit } from "react-icons/fa";
import { SiInkscape } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { BiLogoCPlusPlus } from "react-icons/bi";

export default function SkillsSection() {
  return (
    <div
      id="skills-portion"
      className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center md:pt-5"
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
          <span className="grow">
            <BiLogoFigma size="48" />
          </span>
          <span className="grow">
            <SiAdobephotoshop size="48" />
          </span>
          <span className="grow">
            <BiLogoBlender size="48" />
          </span>
          <span className="grow">
            <SiInkscape size="48" />
          </span>
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
            <span className="grow">
              <BiLogoFigma size="72" />
            </span>
            <span className="grow">
              <SiAdobephotoshop size="72" />
            </span>
            <span className="grow">
              <BiLogoBlender size="72" />
            </span>
            <span className="grow">
              <SiInkscape size="72" />
            </span>
          </div>
          <div className="grid grid-cols-3 grid-rows-4 grid-flow-col left-10 items-center text-white gap-x-5 gap-y-5">
            <span className="row-start-1 row-end-1">
              <FaSwift size="72" />
            </span>
            <span className="row-start-2 row-end-2">
              <BiLogoNodejs size="72" />
            </span>
            <span className="row-start-3 row-end-3">
              <BiLogoJavascript size="72" />
            </span>
            <span className="row-start-4 row-end-4">
              <BiLogoHtml5 size="72" />
            </span>
            <span className="row-start-1 row-end-1">
              <FaUikit size="72" />
            </span>
            <span className="row-start-2 row-end-2">
              <BiLogoTypescript size="72" />
            </span>
            <span className="row-start-3 row-end-3">
              <BiLogoReact size="72" />
            </span>
            <span className="row-start-4 row-end-4">
              <BiLogoCss3 size="72" />
            </span>
            <span className="row-start-1 row-end-1">
              <BiLogoCPlusPlus size="72" />
            </span>
            <span className="row-start-2 row-end-2">
              <BiLogoJava size="72" />
            </span>
            <span className="row-start-3 row-end-3">
              <BiLogoSpringBoot size="72" />
            </span>
            <span className="row-start-4 row-end-4">
              <BiLogoRedux size="72" />
            </span>
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
          <span className="row-start-1 row-end-1">
            <FaSwift size="48" />
          </span>
          <span className="row-start-2 row-end-2">
            <BiLogoNodejs size="48" />
          </span>
          <span className="row-start-3 row-end-3">
            <BiLogoJavascript size="48" />
          </span>
          <span className="row-start-4 row-end-4">
            <BiLogoHtml5 size="48" />
          </span>
          <span className="row-start-1 row-end-1">
            <FaUikit size="48" />
          </span>
          <span className="row-start-2 row-end-2">
            <BiLogoTypescript size="48" />
          </span>
          <span className="row-start-3 row-end-3">
            <BiLogoReact size="48" />
          </span>
          <span className="row-start-4 row-end-4">
            <BiLogoCss3 size="48" />
          </span>
          <span className="row-start-1 row-end-1">
            <BiLogoCPlusPlus size="48" />
          </span>
          <span className="row-start-2 row-end-2">
            <BiLogoJava size="48" />
          </span>
          <span className="row-start-3 row-end-3">
            <BiLogoSpringBoot size="48" />
          </span>
          <span className="row-start-4 row-end-4">
            <BiLogoRedux size="48" />
          </span>
        </div>
      </div>
    </div>
  );
}
