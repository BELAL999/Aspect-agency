import {services} from "../constatns/data"
import TopSection from "./TopSection";
import clsx from "clsx";
import branding from "../assets/videos/branding.mp4"
import HoverPlayer from "./HoverPlayer";
import { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { useTheme } from "../contexts/context";


const Services = () => {
    const {t} = useTheme()
    const [hoveredCard, setHoveredCard] = useState(null);
    useEffect(()=>{
            const wrapper = document.querySelector(".services-container");
    const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName("service");
        
        for (const card of cards) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
    };
    
    wrapper.addEventListener("mousemove", handleMouseMove);
    
    // Cleanup function
    return () => {
        wrapper.removeEventListener("mousemove", handleMouseMove);
    };
    },[])
    return (
        <section className='min-h-screen border mt-32 flex flex-col items-center service-section pt-12 max-w-[96rem]'>
            <TopSection text={t("Services")} />
            <div className="justify-start text-white text-3xl font-normal leading-[50.40px] pb-6">{t("our services")}</div>
            <div className='services-container w-full h-full '>                
                <div className='cards grid grid-cols-1 md:grid-cols-2 min-lg:grid-cols-3 gap-4 relative items-center'>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={clsx('service text-p1 px-[4px] py-[4px]  opacity-[0.7] transition-all duration-500 hover:opacity-100 bg-[#00000000] rounded-2xl h-96', service.id  === 4 ? "md:col-start-1 md:col-end-3" : "")}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                            style = {{
                                borderStyle: "solid" ,
                                borderImageSource: service.id === hoveredCard ? `radial-gradient(
                                    800px circle at var(--mouse-x) var(--mouse-y), 
                                    ${service.glowBg},
                                    transparent 40%)` : "linear-gradient(180deg, #7D7D7D 0%, #000 59.47%)",
                                    borderWidth: "2px 2px 0 2px",
                                    borderImageSlice: 1,
                                }}
                        >
                            <div className="service-content  bg-black p-1 h-full relative flex flex-col justify-between overflow-hidden px-2">
                                <HoverPlayer src={branding} />
                                <div className={
                                    `px-4 py-2 relative  transition-all duration-500  ${hoveredCard === service.id ? "translate-y-0" :"translate-y-[65%] pointer-events-none mt-[-200px]"}`
                                }>
                                    {/* here goes the seviecs description */}
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold pb-2">{service.title}</h3>
                                        {hoveredCard === service.id ? 
                                                                            <div
                                        className={
                                            `w-10 h-10 p-0.5 rounded-[20.04px] inline-flex justify-center items-center gap-3  transition-all duration-500
                                            ${hoveredCard === service.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`
                                        }
                                    >
                                        <div class="w-10 h-10 p-0.5 rounded-[20.04px] border border-[#ffffff33] inline-flex justify-center items-center gap-3">
                                            <BsFillSendFill className='text-white text-xl'/>
                                        </div>
                                    </div>
                                        : null}
                                    </div>
<p
    className="text-[16px] text-[#FFFFFFB2] font-normal leading-relaxed max-w-[70%] transition-all duration-500"
>{service.description}</p> 

                                </div>
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services