import { motion } from "framer-motion"
import { GrLinkedinOption } from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { AiOutlineCodepen } from 'react-icons/ai'
import logo from '../images/jk-logo.svg'
import { forwardRef } from "react";
import { TbMessageCircle } from "react-icons/tb"

export default forwardRef(function Contact(props, ref) {
    const handleLinkedin = () => {
        window.open("https://www.linkedin.com/in/leongjinkai/", "_blank")
      }
      const handleGithub = () => {
        window.open("https://github.com/leongjinkai", "_blank")
      }
      const handleEmail = () => {
        window.location.href = "mailto:leongjinkai@gmail.com"
      }
      const handleCodepen = () => {
        window.open("https://codepen.io/leongjinkai", "_blank")
      }
      
    return (
        <>
        <motion.div className="font-thin absolute md:left-[10%] left-2 md:bottom-1 bottom-16 md:text-[150px] text-[70px] opacity-25 z-10"
          initial={{translateX:300}}
          whileInView={{translateX: 0}}
          transition={{type:'spring', stiffness: 50, mass: 0.5, ease: "easeOut"}}>CONTACT</motion.div>
          <div className="flex flex-col items-center md:gap-7 gap-6 mb-[100px]">
            <div ref={ref} className="flex text-3xl md:gap-16 gap-4">
              <GrLinkedinOption onClick={handleLinkedin} className='hover:text-red-400 cursor-pointer' />
              <AiFillGithub onClick={handleGithub} className='hover:text-red-400 cursor-pointer' />
              <FiMail onClick={handleEmail} className='hover:text-red-400 cursor-pointer' />
              <AiOutlineCodepen onClick={handleCodepen} className='hover:text-red-400 cursor-pointer' />
            </div>
            <motion.div className="relative font-extrabold md:text-6xl text-5xl text-center"
              whileInView={{translateY: 0, opacity:1}}
              initial={{translateY: -200, opacity:0}}
              transition={{duration: 2, type:'spring', bounce: 0.5}}>
              <span className="text-[#EE4E2E]">drop me a </span>message.
              <motion.div className="absolute text-3xl md:right-[-2rem] md:top-[0rem] md:left-[34rem] left-[16rem] top-12"
                whileInView={{scale: 1}}
                initial={{scale: 0}}
                transition={{duration: 0.4, delay: 4, bounce: 1, repeatType:"reverse", repeat: Infinity, repeatDelay:4}}
                type='spring'>
                <TbMessageCircle className=""/>
              </motion.div>
            </motion.div>
            <div className="text-center text-white leading-tight">Got a question or collaboration opportunity,<br />Or just simply want to say hi?<br />Go ahead.</div>
            <button onClick={handleEmail} className="border-2 px-8 py-1 rounded-md hover:drop-shadow-2xl hover:bg-[#5EB1BF] border-[#5EB1BF] hover:text-[#042a2b] z-20">SHOOT</button>
          </div>
          <div className="md:text-sm text-[8px] absolute md:bottom-5 bottom-2 flex flex-col items-center">
            <img className="w-7 mt-2 text-center" src={logo} alt="logo" />
            <p className="text-white">&copy; Leong Jin Kai</p>
          </div>
        </>
    )
})