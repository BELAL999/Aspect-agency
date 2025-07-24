import { Work } from "../constatns/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef,useState,useLayoutEffect, useEffect} from "react"
import { useTheme } from "../contexts/context";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import TopSection from "./TopSection";

const OurWork = () => {

useEffect(() => {
    const cards = document.querySelectorAll(".work-card");
    const wrapper = document.querySelector(".work-cards-container");

    // Exit early if the wrapper element isn't found
    if (!wrapper) return;

    // 1. Define the event handler functions
    const handleMouseMove = (event) => {
        cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            card.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(255, 116, 40, 0.5), transparent 70%), linear-gradient(180deg, rgba(32, 31, 31, 0.90) 0%, #000 100%)`;
        });
    };

    const handleMouseLeave = () => {
        cards.forEach((card) => {
            // Reset the background to its default state
            card.style.background = `linear-gradient(180deg, rgba(32, 31, 31, 0.90) 0%, #000 100%)`;
        });
    };

    // 2. Add the event listeners using the named functions
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    // 3. Return a cleanup function
    return () => {
        wrapper.removeEventListener("mousemove", handleMouseMove);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
}, []); // Empty dependency array ensures this runs only once

    const container = useRef();
    const {i18n} = useTheme();

    useGSAP(() => {
        gsap.from(".work-card", {
            scrollTrigger: {
                trigger: ".work-cards-container",
                start: "top 80%",
                toggleActions: "play none none none",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
        });
    }, { scope: container });

    return (
        <section ref={container} className='min-h-screen border mt-32 flex flex-col items-center container service-section overflow-hidden pt-12'>
            <TopSection text="Our Work" />
            <div className="mt-16 w-full p-4">
                <div className="flex justify-center items-center flex-wrap gap-10 relative work-cards-container">
                    {Work.map((item) => (
                        <div key={item.id} className="w-full lg:w-[calc(50%-40px)] max-w-[520px] work-card">
                            <div className="card-content">
                                <img src={item.imageUrl} alt={item.imageUrl} width={481} height={316} className="w-full object-cover rounded-md mb-10 aspect-[481/316]" loading="lazy" />
                                <div className="flex justify-between items-center">
                                    <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                                    <p className="rounded-[60.72px] border-l-[0.61px] border-r-[0.61px] border-t-[0.61px] border-stone-200/30 text-stone-400 py-1 px-4">{item.category}</p>
                                </div>
                                <p className="text-stone-400 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className=" mt-8 px-4 py-3.5 relative bg-gradient-to-l from-stone-900/10 to-zinc-500/10 rounded-[81.36px] inline-flex justify-center items-center gap-[4.88px]">
    <div className="inline-flex flex-col justify-center items-start">
        <div className="self-stretch flex flex-col justify-start items-start">
            <div className="justify-center text-white text-sm font-medium font-['Rethink_Sans'] leading-snug">View All Works</div>
        </div>
    </div>
    <div className="w-36 h-12 left-0 top-[-0.45px] absolute rounded-[81.36px] border-[0.81px] border-white/30" />
    <div className="w-4 h-4 relative overflow-hidden">
        <div className="w-4 left-0 top-0 absolute inline-flex flex-col justify-center items-start">
            <div className="self-stretch flex-1 flex flex-col justify-start items-start overflow-hidden">
                <div className="w-4 h-4 flex flex-col justify-center items-center overflow-hidden">
                    <div className="w-4 h-4 relative overflow-hidden">
                        {i18n.language === "en" ? <GoArrowRight className = "text-p1"/> : <GoArrowLeft className = "text-p1"/>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    )
}

export default OurWork