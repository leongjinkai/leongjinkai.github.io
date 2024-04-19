import * as React from "react";
import parse from "html-react-parser";

interface ExperienceCardProps {
  title: string;
  company: string;
  timePeriod: string;
  desc: string;
  currentRoleToast?: string;
  clicked: boolean[];
  setClicked: React.Dispatch<React.SetStateAction<boolean[]>>;
  cardNo: number;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  const handleClick = () => {
    const newArr = new Array(props.clicked.length).fill(false);
    newArr[props.cardNo] = true;
    props.setClicked(newArr);
  };

  return (
    <li
      className={`${
        props.clicked[props.cardNo] ? "max-h-40" : "max-h-16 opacity-50"
      } md:mb-4 md:ms-6 mb-5 ms-6 bg-white md:bg-inherit md:px-5 md:py-0 p-5 rounded-xl md:rounded-none transition-[max-height] ease-in-out duration-1000 overflow-y-hidden md:pointer-events-none md:max-h-fit h-72 md:h-fit md:opacity-100`}
      onClick={handleClick}
    >
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
      <h3 className="gap-6 flex items-center mb-1 md:text-lg text-[12.5px] font-semibold md:text-white text-black dark:text-white">
        <p>
          {props.title}
          {" at "}
          {props.company}
        </p>
        {props.currentRoleToast && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3 hidden md:block">
            {props.currentRoleToast}
          </span>
        )}
      </h3>

      <time className="block mb-2 md:text-sm text-[10px] font-normal leading-none text-gray-400 dark:text-gray-500">
        {props.timePeriod}
      </time>
      <p
        className={`${
          props.clicked[props.cardNo] ? "" : "hidden md:block"
        } md:mb-4 mb-10 md:text-sm text-[10px] font-normal dark:text-gray-400`}
      >
        <ul className="list-disc list-outside font-medium">
          {parse(props.desc)}
        </ul>
      </p>
    </li>
  );
}
