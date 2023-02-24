import logo from '../images/jk-logo.svg'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Navbar() {
  return (
    <>
      <div className={`bg-[#042a2b] text-center w-full h-16 fixed md:flex justify-between items-center px-[10%] z-10 hidden`}>
        <img className="w-7 mt-2" src={logo} alt="logo" />
        <div className="flex gap-4 items-center">
          <div>About</div>
          <div>Skills</div>
          <div>Projects</div>
          <div>Contact</div>
          <button className="border-2 px-2 py-1 rounded-md border-[#5EB1BF] hover:bg-[#5EB1BF] hover:text-[#042a2b]">Resume</button>
        </div>
      </div>
      <div className='md:hidden'>
        <GiHamburgerMenu className='md:w-full md:h-12 text-5xl fixed my-4 ml-[77%] z-10' />
        <img className="w-9 mt-5 ml-[10%] fixed z-10" src={logo} alt="logo" />
      </div>
    </>
  );
}
