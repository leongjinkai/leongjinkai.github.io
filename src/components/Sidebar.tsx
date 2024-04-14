import * as React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { AiOutlineCodepen } from "react-icons/ai";

export default function Sidebar({ isinView }) {
  const handleLinkedin = () => {
    window.open("https://www.linkedin.com/in/leongjinkai/", "_blank");
  };
  const handleGithub = () => {
    window.open("https://github.com/leongjinkai", "_blank");
  };
  const handleEmail = () => {
    window.location.href = "mailto:leongjinkai@gmail.com";
  };
  const handleCodepen = () => {
    window.open("https://codepen.io/leongjinkai", "_blank");
  };

  return (
    <>
      <div
        className="fixed bottom-24 left-[10%] z-10"
        style={
          isinView
            ? { transform: "translateX(-300px)", transition: "transform 1s" }
            : { transform: "translateX(0px)", transition: "transform 1s" }
        }
      >
        <div className="md:flex flex-col gap-6 text-2xl hidden">
          <GrLinkedinOption
            onClick={handleLinkedin}
            className="hover:text-red-400 cursor-pointer"
          />
          <AiFillGithub
            onClick={handleGithub}
            className="hover:text-red-400 cursor-pointer"
          />
          <FiMail
            onClick={handleEmail}
            className="hover:text-red-400 cursor-pointer"
          />
          <AiOutlineCodepen
            onClick={handleCodepen}
            className="hover:text-red-400 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}
