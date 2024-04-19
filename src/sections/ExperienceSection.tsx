import * as React from "react";
import { motion } from "framer-motion";
import content from "../content/static.json";
import { MdDesignServices } from "react-icons/md";
import ExperienceCard from "../components/ExperienceCard";
import parse from "html-react-parser";

export default function ExperienceSection() {
  return (
    <div
      id="experience-portion"
      className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center"
    >
      <motion.div
        className="font-thin absolute md:left-[15%] left-2 md:bottom-1 bottom-12  md:text-[150px] text-[70px] opacity-25"
        initial={{ translateX: 300 }}
        whileInView={{ translateX: 0 }}
        transition={{
          type: "spring",
          stiffness: 50,
          mass: 0.5,
          ease: "easeOut",
        }}
      >
        {content.experience.page}
      </motion.div>
      <motion.div
        className="absolute"
        initial={{ scale: 0.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <MdDesignServices className="text-[15rem] opacity-5 text-white" />
      </motion.div>
      <div className="flex flex-col w-[80%] md:w-[70%] md:h-[55%] h-[65%] justify-center items-center gap-5">
        <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
          <ExperienceCard
            title={content.experience.presentRole.title}
            timePeriod={content.experience.presentRole.timePeriod}
            desc={content.experience.presentRole.desc}
            currentRoleToast={content.experience.presentRole.currentRoleToast}
          />
          <ExperienceCard
            title={content.experience.pastRole1.title}
            timePeriod={content.experience.pastRole1.timePeriod}
            desc={content.experience.pastRole1.desc}
          />
          <ExperienceCard
            title={content.experience.pastRole2.title}
            timePeriod={content.experience.pastRole2.timePeriod}
            desc={content.experience.pastRole2.desc}
          />
        </ol>
      </div>
    </div>
  );
}
