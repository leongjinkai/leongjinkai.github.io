import * as React from "react";
import parse from "html-react-parser";

interface ExperienceCardProps {
  title: string;
  timePeriod: string;
  desc: string;
  currentRoleToast?: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
    <li className="md:mb-4 md:ms-6 mb-5 ms-6 bg-white md:bg-inherit md:px-5 md:py-0 p-5 rounded-xl md:rounded-none">
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
      <h3 className="gap-6 flex items-center mb-1 md:text-lg text-md font-semibold md:text-white text-black dark:text-white">
        {props.title}{" "}
        {props.currentRoleToast && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 hidden md:block">
            {props.currentRoleToast}
          </span>
        )}
      </h3>

      <time className="block mb-2 md:text-sm text-xs font-normal leading-none text-gray-400 dark:text-gray-500">
        {props.timePeriod}
      </time>
      <p className="md:mb-4 mb-10 md:text-sm text-[14px] font-normal dark:text-gray-400 hidden md:block">
        <ul className="list-disc list-outside font-medium hidden md:block">
          {parse(props.desc)}
        </ul>
      </p>
    </li>
  );
}
