import { GrLinkedinOption } from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
import { AiOutlineCodepen } from 'react-icons/ai'

export default function Sidebar() {
  return (
    <div className="fixed top-24 left-[88%] z-10">
        <div className='flex flex-col gap-4 text-3xl'>
            <GrLinkedinOption className='text-red-400'/>
            <AiFillGithub />
            <FiMail />
            <AiOutlineCodepen />
        </div>
    </div>
    )
}
