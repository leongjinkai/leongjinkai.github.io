import { GrLinkedinOption } from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { AiOutlineCodepen } from 'react-icons/ai'

export default function Sidebar() {
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
        <div className="fixed top-24 left-[88%] z-10">
            <div className='md:flex flex-col gap-4 text-3xl hidden'>
                <GrLinkedinOption onClick={handleLinkedin} className='hover:text-red-400 cursor-pointer' />
                <AiFillGithub onClick={handleGithub} className='hover:text-red-400 cursor-pointer' />
                <FiMail onClick={handleEmail} className='hover:text-red-400 cursor-pointer' />
                <AiOutlineCodepen onClick={handleCodepen} className='hover:text-red-400 cursor-pointer' />
            </div>
        </div>
        )
}
