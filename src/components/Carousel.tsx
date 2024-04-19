import * as React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Lottie from "react-lottie";
import * as lottie1 from "../assets/lotties/Animation - 1713118521359.json";
import * as lottie2 from "../assets/lotties/Animation - 1713118593518.json";
import * as lottie3 from "../assets/lotties/Animation - 1713119644289.json";
import content from "../content/static.json";

export default function Carousel() {
  const refone = useRef(null);
  const isinViewOne = useInView(refone);

  const reftwo = useRef(null);
  const isinViewTwo = useInView(reftwo);

  const refthree = useRef(null);
  const isinViewThree = useInView(refthree);

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
    <>
      <div className="md:hidden">
        <svg className="absolute top-[110px] left-[30vw]">
          <circle
            cx="50"
            cy="50"
            r="5"
            className=""
            style={isinViewOne ? { fill: "#EE4E2E" } : { fill: "#5EB1BF" }}
          />
        </svg>
        <svg className="absolute top-[110px] left-[38vw]">
          <circle
            cx="50"
            cy="50"
            r="5"
            className=""
            style={isinViewTwo ? { fill: "#EE4E2E" } : { fill: "#5EB1BF" }}
          />
        </svg>
        <svg className="absolute top-[110px] left-[46vw]">
          <circle
            cx="50"
            cy="50"
            r="5"
            className=""
            style={isinViewThree ? { fill: "#EE4E2E" } : { fill: "#5EB1BF" }}
          />
        </svg>
      </div>
      <div
        id="scroll-carousel"
        className="flex gap-20 md:hidden justify-start items-center snap-mandatory snap-x overflow-scroll mx-10 w-screen"
      >
        <motion.div
          ref={refone}
          className="text-center place-content-center shrink-0 snap-center"
        >
          <div className="w-[80vw] h-[80vw] bg-[#5EB1BF] opacity-30">
            <Lottie
              options={lottieFactory(lottie1)}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="mt-8 text-white">
            {content.projects.project1Title}
          </div>
        </motion.div>
        <motion.div
          ref={reftwo}
          className="text-center place-content-center shrink-0 snap-center"
        >
          <div className="w-[80vw] h-[80vw] bg-[#EE4E2E] opacity-30">
            <Lottie
              options={lottieFactory(lottie2)}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="mt-8 text-white">
            {content.projects.project2Title}
          </div>
        </motion.div>
        <motion.div
          ref={refthree}
          className="text-center place-content-center shrink-0 snap-center"
        >
          <div className="w-[80vw] h-[80vw] bg-[#5EB1BF] opacity-30">
            <Lottie
              options={lottieFactory(lottie3)}
              isStopped={false}
              isPaused={false}
            />
          </div>
          <div className="mt-8 text-white">
            {content.projects.project3Title}
          </div>
        </motion.div>
      </div>
    </>
  );
}
