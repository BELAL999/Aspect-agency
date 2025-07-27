import { memo } from "react";
import clsx from "clsx";
import { useState, useRef } from "react";
import { BsFillSendFill } from "react-icons/bs";
import HoverPlayer from "./HoverPlayer";

const ServiceCard = ({ id, description, title, video, glowBorder }) => {
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    return (
        <div
            ref={cardRef}
            className={clsx(
                // h-80 is the initial height, group-hover:h-96 is the expanded height.
                'group service relative text-p1 p-[2px] opacity-70 transition-all duration-500 hover:opacity-100 rounded-2xl h-80 group-hover:h-96',
                id === 4 && "md:col-span-2"
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
                border: "2px solid transparent",
                borderImage: isHovered
                    ? `radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), ${glowBorder}, transparent 40%) 1`
                    : "linear-gradient(180deg, #7D7D7D 0%, #000 59.47%) 1",
            }}
        >
            <div className="bg-black w-full h-full relative flex flex-col justify-end overflow-hidden rounded-[14px]">
                {/* Video container now takes up the remaining space */}
                <div className="absolute inset-0 bottom-auto h-full">
                     <HoverPlayer src={video} />
                </div>


                <div className="relative z-10 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                     <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold">{title}</h3>
                        <div className="w-10 h-10 p-0.5 rounded-full border border-[#ffffff33] inline-flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                            <BsFillSendFill className='text-white text-xl' />
                        </div>
                    </div>
                     <div className="transition-all duration-500 ease-in-out max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                        <p className="text-[16px] text-[#FFFFFFB2] font-normal leading-relaxed max-w-[90%] pt-2">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ServiceCard);