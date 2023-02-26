import logo from '../images/jk-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import orangeLogo from '../images/jk-logo-orange.svg'
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
      <motion.div className={`bg-[#042a2b] text-sm font-bold text-center w-full h-16 fixed md:flex justify-between items-center px-[10%] z-10 hidden`}
      initial={{translateY: -100}}
      animate={{translateY: 0}}
      transition={{duration: 0.5}}>
        <img className="w-7 mt-2" src={logo} alt="logo" />
        <div className="flex gap-7 items-center">
          <div className='hover:text-[#EE4E2E]'><a href="#about-portion">About</a></div>
          <div className='hover:text-[#EE4E2E]'><a href="#skills-portion">Skills</a></div>
          <div className='hover:text-[#EE4E2E]'><a href="#projects-portion">Projects</a></div>
          <div className='hover:text-[#EE4E2E]'><a href="#contact-portion">Contact</a></div>
          <a href={Pdf} target='_blank' rel="noopener noreferrer"><button className="border-2 px-2 py-1 rounded-md border-[#5EB1BF] hover:bg-[#5EB1BF] hover:text-[#042a2b]">Resume</button></a>
        </div>
      </motion.div>
      {/* Mobile version logic */}
      <AnimatePresence>
      <div className='md:hidden w-full'>
          <motion.div className='bg-white fixed w-[100vw] h-[50%] z-30 text-black'
          animate={burgerToggle ? "open": "closed"}
          initial={{translateY: -600}}
          variants={variants}>
            <div className='w-[75%] mx-auto text-end flex flex-col gap-6 pt-20 text-2xl text-[#042a2b]'>
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
        <img className="w-9 mt-5 ml-[10%] fixed z-30"
          style={{zIndex: burgerToggle ? 40 : 30}}
          src={orangeLogo} alt="orangeLogo" />
        <img className="w-9 mt-5 ml-[10%] fixed z-30" src={logo} alt="logo" />
      </div>
      </AnimatePresence>
    </>
  );
}
