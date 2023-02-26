import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx'
import Pdf from '../files/jinkai-resume.pdf'
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [burgerToggle, setBurgerToggle] = useState(false)

  const variants = {
    open: { opacity: 1, translateY: 0, transition: {duration: 1, type:'spring'}},
    closed: { opacity: 0, translateY: -350, transition: {duration: 1, type:'spring'} }
  }

  return (
    <>
    {/* Web version logic */}
      <motion.div className={`bg-[#042a2b] text-sm font-bold text-center w-full h-16 fixed md:flex justify-between items-center px-[10%] z-10 hidden border-1`}
      initial={{translateY: -100}}
      animate={{translateY: 0}}
      transition={{duration: 0.5}}>
        <motion.svg className="mt-16" width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path className="stroke-[#EE4E2E]"
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat:Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
            strokeWidth={2}
            strokeDasharray= '0 1'
            fill="none"
            d="M9.04 9.352C11.056 9.352 12.676 7.732 12.676 5.716C12.676 3.7 11.056 2.08 9.04 2.08C7.024 2.08 5.404 3.7 5.404 5.716C5.404 7.732 7.024 9.352 9.04 9.352ZM5.044 35.056C10.084 35.056 12.28 31.708 12.28 27.244V10.612H5.8V27.244C5.8 28.9 5.08 29.764 3.892 29.764C2.884 29.764 2.452 29.62 1.732 29.08L0.184 33.868C1.588 34.732 2.416 35.056 5.044 35.056Z" />
          <motion.path className="stroke-[#5EB1BF]"
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat:Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
            strokeWidth={2}
            strokeDasharray= '0 1'
            fill="none"
            d="M35.484 34L29.112 24.532L35.088 16.612H27.276L23.28 22.804V9.988H16.8V34H23.28V30.076L24.54 28.384L27.528 34H35.484Z"/>
        </motion.svg>
        <div className="flex gap-7 items-center">
          <div className='hover:text-[#EE4E2E]'><a href="#about-portion">About</a></div>
          <div className='hover:text-[#EE4E2E]'><a href="#skills-portion">Skills</a></div>
          <div className='hover:text-[#EE4E2E]'><a href="#projects-portion">Projects</a></div>
          <div className='hover:text-[#EE4E2E]'><a href="#contact-portion">Contact</a></div>
          <a href={Pdf} target='_blank' rel="noopener noreferrer"><button className="border-2 px-2 py-1 rounded-md border-[#5EB1BF] hover:drop-shadow-2xl hover:bg-[#5EB1BF] hover:text-[#042a2b]">Resume</button></a>
        </div>
      </motion.div>
      {/* Mobile version logic */}
      <AnimatePresence>
      <div className='md:hidden w-full'>
          <motion.div className='bg-white fixed w-[100vw] h-[70%] z-30 text-black'
          animate={burgerToggle ? "open": "closed"}
          initial={{translateY: -1000}}
          variants={variants}>
            <div className='w-[80%] mx-auto text-end flex flex-col gap-4 pt-20 text-2xl text-[#042a2b]'>
              <motion.div onClick={() => {setBurgerToggle(!burgerToggle)}}><a href="#about-portion">About</a></motion.div>
              <div onClick={() => {setBurgerToggle(!burgerToggle)}}><a href="#skills-portion">Skills</a></div>
              <div onClick={() => {setBurgerToggle(!burgerToggle)}}><a href="#projects-portion">Projects</a></div>
              <div onClick={() => {setBurgerToggle(!burgerToggle)}}><a href="#contact-portion">Contact</a></div>
              <div onClick={() => {setBurgerToggle(!burgerToggle)}}><a href={Pdf} target='_blank' rel="noopener noreferrer">Resume</a></div>
            </div>
          </motion.div>
        {burgerToggle ? 
          <RxCross1 
          onClick={() => {setBurgerToggle(!burgerToggle)}}
          className='md:w-full md:h-12 text-5xl fixed my-4 ml-[77%] z-30  text-[#EE4E2E]' /> : 
          <GiHamburgerMenu 
          onClick={() => {setBurgerToggle(!burgerToggle)}}
          className='md:w-full md:h-12 text-5xl fixed my-4 ml-[77%] z-30' />
        }
        <motion.svg className="mt-5 ml-[10%] fixed z-30 md:hidden" width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path className="stroke-[#EE4E2E]"
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat:Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
            strokeWidth={2}
            strokeDasharray= '0 1'
            fill="none"
            d="M9.04 9.352C11.056 9.352 12.676 7.732 12.676 5.716C12.676 3.7 11.056 2.08 9.04 2.08C7.024 2.08 5.404 3.7 5.404 5.716C5.404 7.732 7.024 9.352 9.04 9.352ZM5.044 35.056C10.084 35.056 12.28 31.708 12.28 27.244V10.612H5.8V27.244C5.8 28.9 5.08 29.764 3.892 29.764C2.884 29.764 2.452 29.62 1.732 29.08L0.184 33.868C1.588 34.732 2.416 35.056 5.044 35.056Z" />
          <motion.path className="stroke-[#5EB1BF]"
            initial={{pathLength:0}}
            animate={{pathLength:1}}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat:Infinity,
              repeatType: "reverse",
              repeatDelay: 3
            }}
            strokeWidth={2}
            strokeDasharray= '0 1'
            fill="none"
            d="M35.484 34L29.112 24.532L35.088 16.612H27.276L23.28 22.804V9.988H16.8V34H23.28V30.076L24.54 28.384L27.528 34H35.484Z"/>
        </motion.svg>
      </div>
      </AnimatePresence>
    </>
  );
}
