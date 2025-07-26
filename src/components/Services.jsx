import {services} from "../constatns/data"
import TopSection from "./TopSection";
// Register ScrollTrigger plugin
import clsx from "clsx";
import branding from "../assets/videos/branding.mp4"
import HoverPlayer from "./HoverPlayer";
import { useEffect } from "react";

const Services = () => {

    return (
        <section className='min-h-screen border mt-32 flex flex-col items-center service-section pt-12 max-w-[96rem]'>
            <TopSection text="Services" />
            <div className="justify-start text-white text-3xl font-normal leading-[50.40px] pb-6">Explore Our Core Services</div>
            {/* Fixed container structure */}
            <div className='services-container w-full h-full '>                <div className='cards grid grid-cols-1 md:grid-cols-2 min-lg:grid-cols-3 gap-4 relative'>
                    {services.map((service) => (
                        <div key={service.id} className={clsx('service text-p1 px-[4px] py-[4px]  opacity-[0.7] transition-all duration-500 hover:opacity-100 bg-[#00000033] rounded-2xl h-96', service.id  === 4 ? "md:col-start-1 md:col-end-3" : "")}>
                                                            <div className="glowBg" style={{
                                                                background : service.glowBg

                                                            }
                                                            }></div>
                            <div className="service-content  bg-black p-1 h-full relative z-10  overflow-hidden px-2">
                                <HoverPlayer src={branding} />
                                <div className="absolute bottom-0">
                                    {/* here goes the seviecs description */}
                                    <h3 className="text-[20px] font-bold pb-2">{service.title}</h3>
                                    <p className="text-[16px] text-[#FFFFFFB2] font-normal leading-relaxed line-clamp-2">{service.description}</p>
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