import logo from '../images/jk-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import orangeLogo from '../images/jk-logo-orange.svg'
import { RxCross1 } from 'react-icons/rx'
import Pdf from '../files/jinkai-resume.pdf'

export default function Navbar() {
  const [burgerToggle, setBurgerToggle] = useState(false)

  const handleBurgerClick = () => {
    setBurgerToggle(!burgerToggle)

  }

  return (
    <>
      <div className={`bg-[#042a2b] text-center w-full h-16 fixed md:flex justify-between items-center px-[10%] z-10 hidden`}>
        <img className="w-7 mt-2" src={logo} alt="logo" />
        <div className="flex gap-4 items-center">
          <div><a href="#about-portion">About</a></div>
          <div><a href="#skills-portion">Skills</a></div>
          <div><a href="#projects-portion">Projects</a></div>
          <div><a href="#contact-portion">Contact</a></div>
          <a href={Pdf} target='_blank' rel="noopener noreferrer"><button className="border-2 px-2 py-1 rounded-md border-[#5EB1BF] hover:bg-[#5EB1BF] hover:text-[#042a2b]">Resume</button></a>
        </div>
      </div>
      <div className='md:hidden w-full'>
        {burgerToggle && 
          <div className='bg-white fixed w-[100vw] h-[50%] z-30 text-black'>
            <div className='w-[75%] mx-auto text-end flex flex-col gap-6 pt-20 text-2xl text-[#042a2b]'>
              <div onClick={handleBurgerClick}><a href="#about-portion">About</a></div>
              <div onClick={handleBurgerClick}><a href="#skills-portion">Skills</a></div>
              <div onClick={handleBurgerClick}><a href="#projects-portion">Projects</a></div>
              <div onClick={handleBurgerClick}><a href="#contact-portion">Contact</a></div>
              <div onClick={handleBurgerClick}><a href={Pdf} target='_blank' rel="noopener noreferrer">Resume</a></div>
            </div>
          </div>
        }
        {burgerToggle ? 
          <RxCross1 
          onClick={handleBurgerClick}
          className='md:w-full md:h-12 text-5xl fixed my-4 ml-[77%] z-30  text-[#EE4E2E]' /> : 
          <GiHamburgerMenu 
          onClick={handleBurgerClick}
          className='md:w-full md:h-12 text-5xl fixed my-4 ml-[77%] z-30' />
        }
        <img className="w-9 mt-5 ml-[10%] fixed z-30"
          style={{zIndex: burgerToggle ? 40 : 30}}
          src={orangeLogo} alt="orangeLogo" />
        <img className="w-9 mt-5 ml-[10%] fixed z-30" src={logo} alt="logo" />
      </div>
    </>
  );
}
