import {services} from "../constatns/data"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef,useState,useLayoutEffect} from "react"
import { useTheme } from "../contexts/context";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopSection from "./TopSection";
// Register ScrollTrigger plugin
import clsx from "clsx";
import branding from "../assets/videos/branding.mp4"
import HoverPlayer from "./HoverPlayer";

const Services = () => {
    const cardsRef = useRef(null);

    return (
        <section className='min-h-screen border mt-32 flex flex-col items-center container service-section pt-12'>
            <TopSection text="Services" />
            <div className="justify-start text-white text-3xl font-normal leading-[50.40px] pb-6">Explore Our Core Services</div>
            {/* Fixed container structure */}
            <div className='services-container w-full h-full '>
                <div ref={cardsRef} className='cards grid grid-cols-1 md:grid-cols-2 min-lg:grid-cols-3 gap-4'>
                    {services.map((service) => (
                        <div key={service.id} className={clsx('service text-p1 px-[12px] py-[30px] overflow-hidden opacity-[0.7] transition-all duration-500 hover:opacity-100 bg-[#00000033]', service.id  === 4 ? "md:col-span-2" : "")}>
                            <div className="service-content flex flex-col justify-between items-center">
                                <HoverPlayer src={branding} />
                                <div>
                                    {/* here goes the seviecs description */}
                                    <h3 className="text-[20px] font-bold pb-2">{service.title}</h3>
                                    <p className="text-[16px] text-[#FFFFFFB2] font-normal leading-relaxed">{service.description}</p>
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