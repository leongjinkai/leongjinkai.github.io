import "./App.css";
import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";
import Carousel from "./components/Carousel.js";
import { MdDesignServices } from 'react-icons/md'
import { GrLinkedinOption } from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { AiOutlineCodepen } from 'react-icons/ai'
import profile from './images/jk_headshot.jpg'
import logo from './images/jk-logo.svg'

function App() {
  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <div id="scroll-container" className="snap-y snap-mandatory max-h-screen w-full overflow-scroll scroll-smooth">
        <div className="relative h-[100vh] snap-start flex flex-col justify-center items-center md:items-stretch md:gap-10 gap-8">
          <div className="flex w-[80%] md:ml-[20%] items-center md:gap-20 gap-8 md:flex-row flex-col-reverse">
            <div className="md:w-[50%] md:min-w-[320px] md:max-w-[420px] flex flex-col grow-0">
              <p className="text-[#EE4E2E]">Hi, my name is</p>
              <p className="text-white text-center font-Proxima font-extrabold text-[96px] p-0 leading-none">JINKAI</p>
              <p className="text-end font-bold text-3xl">Web Developer</p>
            </div>
            <div className="w-48 h-48 relative">
              <img className="rounded-full z-10 object-cover grayscale" src={profile} alt="profilepic" />
              <div className="w-48 h-48 bg-[#EE4E2E] border-[#042a2b] border rounded-full z-20 absolute top-0 opacity-10"></div>
            </div>
          </div>
          <div className="hidden md:static">
            <p className="md:ml-[20%]">I specialize in building and desiging<br />interfaces for exceptional digital experiences</p>
          </div>
          <div className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-[-100px] md:text-[150px] text-[80px] opacity-10 ">ABOUT</div>
        </div>
        <div className="md:hidden relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <div className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-10 md:text-[150px] text-[80px] opacity-10">ABOUT</div>
          <div className="w-[80%]">
            <p className="font-bold text-3xl">I specialize in building and desiging<br />interfaces for exceptional digital experiences</p>
          </div>
        </div>
        <div className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <div className="font-thin absolute md:left-[10%] left-2 md:bottom-1 bottom-10 md:text-[150px] text-[80px] opacity-10">SKILLS</div>
          <MdDesignServices className="absolute text-[200px] opacity-25"/>
          <div className="flex flex-col w-[80%] md:h-[55%] h-[65%] justify-center items-center gap-5">
            <div className="font-extrabold md:text-6xl text-5xl pr-[40%] text-[#5EB1BF]">Design</div>
            <div className="md:flex justify-center align-middle gap-10 grow w-full hidden">
              <div className="flex flex-col justify-center items-center basis-1/3 gap-3 text-white">
                <span className="grow">Figma</span>
                <span className="grow">Gimp</span>
                <span className="grow">Blender</span>
                <span className="grow">Inkscape</span>
              </div>
              <div className="grid grid-cols-3 grid-rows-4 grid-flow-col left-10 items-center text-white">
                <span className="row-start-2 row-end-2">Node.js</span>
                <span className="row-start-3 row-end-3">Javascript</span>
                <span className="row-start-4 row-end-4">HTML</span>
                <span className="row-start-2 row-end-2">Flow</span>
                <span className="row-start-3 row-end-3">React</span>
                <span className="row-start-4 row-end-4">CSS</span>
                <span className="row-start-2 row-end-2">Express.js</span>
                <span className="row-start-3 row-end-3">Next.js</span>
                <span className="row-start-4 row-end-4">TailwindCSS</span>
              </div>
            </div>
            <div className="font-extrabold md:text-6xl text-5xl md:pl-[43%] pl-[15%] text-[#EE4E2E]">Engineering</div>
          </div>
        </div>
        <div className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <div className="font-thin absolute md:right-[10%] right-2 md:bottom-1 bottom-10 md:text-[150px] text-[80px] opacity-10">PROJECTS</div>
          <div className="md:flex w-[80%] gap-16 justify-center md:flex-row hidden">
            <div className="text-center">
              <div className="w-60 h-60 bg-[#5EB1BF] opacity-30"></div>
              <p className="mt-3">Project text 1</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 bg-[#EE4E2E] opacity-30"></div>
              <p className="mt-3">Project text 2</p>
            </div>
            <div className="text-center">
              <div className="w-60 h-60 bg-[#5EB1BF] opacity-30"></div>
              <p className="mt-3">Project text 3</p>
            </div>
          </div>
          <Carousel />
        </div>
        <div className="relative bg-[#042a2b] h-[100vh] snap-start flex justify-center items-center">
          <div className="font-thin absolute md:left-[10%] left-2 md:bottom-1 bottom-10 md:text-[150px] text-[80px] opacity-10 z-10">CONTACT</div>
          <div className="flex flex-col items-center md:gap-7 gap-6">
            <div className="flex text-3xl md:gap-16 gap-4">
              <GrLinkedinOption />
              <AiFillGithub />
              <FiMail />
              <AiOutlineCodepen />
            </div>
            <div className="font-extrabold md:text-6xl text-5xl text-center"><span className="text-[#EE4E2E]">drop me a </span>message.</div>
            <div className="text-center text-white leading-tight">Got a question or collaboration opportunity,<br />Or just simply want to say hi?<br />Go ahead.</div>
            <button className="border-2 px-8 py-1 rounded-md hover:bg-[#5EB1BF] border-[#5EB1BF] hover:text-[#042a2b] z-20">SHOOT</button>
          </div>
          <div className="md:text-sm text-[8px] absolute md:bottom-5 bottom-2 flex flex-col items-center">
            <img className="w-7 mt-2 text-center" src={logo} alt="logo" />
            <p className="text-white">&copy; Leong Jin Kai</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
