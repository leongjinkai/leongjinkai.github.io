import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Carousel() {
    const refone = useRef(null)
    const isinViewOne = useInView(refone)

    const reftwo = useRef(null)
    const isinViewTwo = useInView(reftwo)

    const refthree = useRef(null)
    const isinViewThree = useInView(refthree)

    return (
        <>
            <div className="md:hidden">
                <svg className="absolute top-[110px] left-[35vw]">
                    <circle cx="50" cy="50" r="5" className="" style={isinViewOne ? {fill: "#EE4E2E"} : {fill: "#5EB1BF"}} />
                </svg>
                <svg className="absolute top-[110px] left-[40vw]">
                    <circle cx="50" cy="50" r="5" className="" style={isinViewTwo ? {fill: "#EE4E2E"} : {fill: "#5EB1BF"}} />
                </svg>
                <svg className="absolute top-[110px] left-[45vw]">
                    <circle cx="50" cy="50" r="5" className="" style={isinViewThree ? {fill: "#EE4E2E"} : {fill: "#5EB1BF"}} />
                </svg>
            </div>
            <div id="scroll-carousel" className="flex gap-20 md:hidden justify-start items-center snap-mandatory snap-x overflow-scroll mx-10 w-screen">  
                <motion.div ref={refone} className="text-center place-content-center shrink-0 snap-center">
                    <div className="w-[80vw] h-[80vw] bg-[#5EB1BF] opacity-30"></div>
                </motion.div>
                <motion.div ref={reftwo} className="text-center place-content-center shrink-0 snap-center">
                    <div className="w-[80vw] h-[80vw] bg-[#EE4E2E] opacity-30"></div>
                </motion.div>
                <motion.div ref={refthree} className="text-center place-content-center shrink-0 snap-center">
                    <div className="w-[80vw] h-[80vw] bg-[#5EB1BF] opacity-30"></div>
                </motion.div>
            </div>
        </>
        
    )
}