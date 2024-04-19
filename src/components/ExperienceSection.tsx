import * as React from "react";
import { motion } from "framer-motion";
import content from "../content/static.json";
import { MdDesignServices } from "react-icons/md";

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
          <li className="pl-10 mb-4 ms-6">
            <span className="mb-5 -left-[15px] absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="gap-6 flex items-center mb-1 md:text-lg text-md font-semibold text-white dark:text-white">
              Software Developer at OCBC Singapore{" "}
              <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 hidden md:block">
                Current Role
              </span>
            </h3>
            <time className="block mb-2 md:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
              Nov 2023 - Present
            </time>
            <p className="md:mb-4 mb-10 md:text-sm text-[14px] font-normal dark:text-gray-400">
              <ul className="list-disc list-outside font-medium hidden md:block">
                <li>
                  Developed Payments Features for OCBC consumer banking mobile
                  app using UiKit and Combine
                </li>
                <li>
                  Worked on feature enhancements for OCBC overseas corporate
                  banking MFE app
                </li>
                <li>
                  Led the legacy codebase migration for two features to React
                  framework
                </li>
              </ul>
            </p>
          </li>
          <li className="pl-10 mb-4 ms-6">
            <span className="mb-5 -left-[15px] absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="gap-6 flex items-center mb-1 md:text-lg text-md font-semibold text-white dark:text-white">
              Technical Consultant at FDM Group
            </h3>
            <time className="block mb-2  md:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
              June 2023 - Present
            </time>
            <p className="md:mb-4 mb-10 md:text-sm text-[14px] font-normal dark:text-gray-400">
              <ul className="list-disc list-outside font-medium hidden md:block">
                <li>
                  Developed a full stack banking app with JWT and 2FA email
                  authentication and authorization, along with chart
                  visualization for spending analysis.
                </li>
              </ul>
            </p>
          </li>
          <li className="pl-10 mb-4 ms-6">
            <span className="mb-5 -left-[15px] absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 dark:ring-gray-900 dark:bg-blue-900">
              <svg
                className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="gap-6 flex items-center mb-1 md:text-lg text-md font-semibold text-white dark:text-white">
              Business Product Manager at Shopee
            </h3>
            <time className="block mb-2 md:text-sm text-[14px] font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2022 - June 2023
            </time>
            <p className="md:mb-4 mb-10 md:text-sm text-xs font-normal dark:text-gray-400">
              <ul className="list-disc list-outside font-medium hidden md:block">
                <li>
                  Created dashboards using an in-house visualization platform
                  for product analytics
                </li>
                <li>
                  Automated operational communications and data reporting
                  procedures
                </li>
                <li>
                  Kickstart new product engagement channels and conducted
                  company-wide training to raise awareness
                </li>
              </ul>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
}
