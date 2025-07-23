import { Work } from "../constatns/data";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef,useState,useLayoutEffect} from "react"
import { useTheme } from "../contexts/context";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const OurWork = () => {

    const {i18n} = useTheme();

    return (
        <section className='min-h-screen border mt-32 flex flex-col items-center container service-section overflow-hidden pt-12'>
            <div className="h-12 px-3.5 bg-stone-900/10 rounded-[124.42px] outline-[1.24px] outline-offset-[-1.24px] outline-stone-200/10 backdrop-blur-[6.22px] inline-flex justify-center items-center gap-3">
                <div className="text-center justify-start text-white text-xl font-medium leading-loose">Our Works</div>
            </div>
            <div className="mt-16 w-full p-4">
                <div className="flex justify-center items-center flex-wrap gap-10 relative">
                    {Work.map((item) => (
                        <div key={item.id} className="w-full lg:w-[calc(50%-40px)] max-w-[520px] work-card">
                            <img src={item.imageUrl} alt={item.imageUrl} className="w-full object-cover rounded-md mb-10" />
                            <div className="flex justify-between items-center">
                              <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                              <p className="rounded-[60.72px] border-l-[0.61px] border-r-[0.61px] border-t-[0.61px] border-stone-200/30 text-stone-400 py-1 px-4">{item.category}</p>
                            </div>
                            <p className="text-stone-400 mt-2">{item.description}</p>
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