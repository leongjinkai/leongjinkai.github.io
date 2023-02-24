

export default function Carousel() {
    return (
        <div id="scroll-carousel" className="flex gap-8 md:hidden justify-start items-center overflow-x-scroll snap-x snap-mandatory mx-4">
            <div className="text-center">
                <div className="w-[80vw] h-[80vw] bg-[#5EB1BF] opacity-30"></div>
                    <p className="">Project text 1</p>
                </div>
                <div className="text-center">
                <div className="w-[80vw] h-[80vw] bg-[#EE4E2E] opacity-30"></div>
                    <p className="">Project text 2</p>
                </div>
                <div className="text-center">
                <div className="w-[80vw] h-[80vw] bg-[#5EB1BF] opacity-30"></div>
                    <p className="">Project text 3</p>
                </div>
        </div>
    )
}