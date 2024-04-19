import * as React from "react";
import profile from "../assets/jk_headshot.jpg";
import parse from "html-react-parser";
import { motion } from "framer-motion";
import content from "../content/static.json";

export default function AboutSection() {
  return (
    <>
      <div
        id="about-portion"
        className="relative h-[100vh] snap-start flex flex-col justify-center items-center md:items-stretch md:gap-10 gap-8"
      >
        <div className="flex w-[85%] md:ml-[20%] items-center md:gap-20 gap-8 md:flex-row flex-col-reverse">
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
            <p className="text-end font-bold text-3xl">{content.about.role}</p>
          </motion.div>
          <motion.div
            className="font-thin absolute md:left-[15%] left-2 md:bottom-1 bottom-12  md:text-[150px] text-[70px] opacity-25 md:hidden"
            initial={{ translateX: 300 }}
            whileInView={{ translateX: 0 }}
            transition={{
              type: "spring",
              stiffness: 50,
              mass: 0.5,
              ease: "easeOut",
            }}
          >
            {content.about.welcome}
          </motion.div>
          <motion.div
            className="w-60 h-60 relative hover:scale-110 hover:duration-500 hover:drop-shadow-2xl"
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
        <div className="hidden md:block w-[85%]">
          <p className="md:ml-[20%]">
            {content.about.desc.replaceAll("<br>", "")}
          </p>
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
          <p className="font-bold text-2xl text-white">
            {parse(content.about.desc)}
          </p>
        </div>
      </div>
    </>
  );
}
