import {services} from "../constatns/data"
import TopSection from "./TopSection";
// Register ScrollTrigger plugin
import clsx from "clsx";
import branding from "../assets/videos/branding.mp4"
import HoverPlayer from "./HoverPlayer";
import { useEffect, useState } from "react";
import { BsFillSendFill } from "react-icons/bs";


const Services = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className='min-h-screen border mt-32 flex flex-col items-center service-section pt-12 max-w-[96rem]'>
            <TopSection text="Services" />
            <div className="justify-start text-white text-3xl font-normal leading-[50.40px] pb-6">Explore Our Core Services</div>
            {/* Fixed container structure */}
            <div className='services-container w-full h-full '>                <div className='cards grid grid-cols-1 md:grid-cols-2 min-lg:grid-cols-3 gap-4 relative'>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={clsx('service text-p1 px-[4px] py-[4px]  opacity-[0.7] transition-all duration-500 hover:opacity-100 bg-[#00000033] rounded-2xl h-96', service.id  === 4 ? "md:col-start-1 md:col-end-3" : "")}
                            onMouseEnter={() => setHoveredCard(service.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="glowBg" style={{
                                background : service.glowBg

                            }
                            }></div>
                            <div className="service-content  bg-black p-1 h-full relative flex flex-col justify-between overflow-hidden px-2">
                                <HoverPlayer src={branding} />
                                <div className={
                                    `px-4 py-2 relative  transition-all duration-500  ${hoveredCard === service.id ? "translate-y-0" :"translate-y-[60%] pointer-events-none mt-[-200px]"}`
                                }>
                                    {/* here goes the seviecs description */}
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-2xl font-bold pb-2">{service.title}</h3>
                                        {hoveredCard === service.id ? 
                                                                            <div
                                        className={
                                            `w-10 h-10 p-0.5 rounded-[20.04px] border border-[#ffffff33] inline-flex justify-center items-center gap-3  transition-all duration-500
                                            ${hoveredCard === service.id ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`
                                        }
                                    >
                                        <BsFillSendFill className='text-white text-xl'/>
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