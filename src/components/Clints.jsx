import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef,useState} from "react"
import {statsData} from "../constatns/data"
import { useTheme } from "../contexts/context";
const Clints = () => {
    const lightBg = useRef(null);
    const {t} = useTheme();
    const lightSvg = useRef(null);
    const stats = useRef(null);
    // Create refs for each stat value
    const valueRefs = useRef([]);
    const [clients,setClients] = useState(Array.from({ length: 18 }, (_, i) => ({
        src: `/clients/${i + 1}.png`
    })))
useGSAP(() => {
    // Create a single timeline with one ScrollTrigger to avoid conflicts
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".outerFrame",
            start: "top center",
            end: "+=400", // Increased for smoother animation
            scrub: 1, // Adding ease to scrub
            pin: true,
        }
    });

    // Set initial positions
    gsap.set(lightBg.current, { yPercent: -100 });
    gsap.set(stats.current, { y: 300 });

    // Animate lightBg from start
    tl.to(lightBg.current, {
        yPercent: -50,
        duration: 0.4, // Relative duration within timeline
        ease: "power2.out"
    })
    // Animate stats with slight delay and stagger
    .to(stats.current, {
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        ease: "back.out(1.7)"
    }, "-=0.2") // Start 0.2 seconds before previous animation ends
    
    statsData.forEach((item, i) => {
        const el = valueRefs.current[i];
        if (el) {
            gsap.fromTo(el, { innerText: 0 }, {
                innerText: item.value,
                duration: 1.5,
                ease: "power1.out",
                snap: { innerText: 1 },
                onUpdate: function() {
                    el.innerText = `${Math.floor(el.innerText)}+`;
                },
                scrollTrigger: {
                    trigger: stats.current,
                    start: "top-=100 80%",
                }
            });
        }
    });
}, []);   
return(
        <section className='text-p1 w-screen container mb-[1000px] outerFrame '>
            <h3 className="py-8 mx-auto font-semibold text-2xl w-fit">Trusted by</h3>
            <div className="relative clients-frame overflow-hidden justify-center items-center">
                <div className='light-bg' ref={lightBg}></div>
                <div className='bg-[#F78546] absolute top-0 left-[50%] translate-x-[-50%] w-[10%] h-[1px] rounded-2xl'></div>
                <svg ref={lightSvg} xmlns="http://www.w3.org/2000/svg" width="1003" height="358" viewBox="0 0 1003 358" fill="none" style={{
                    zIndex: 0,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                }}>
                    <path d="M68.991 340.953V0M135.324 340.953V0M201.661 340.953V0M267.998 340.953V0M334.335 340.953V0M400.668 340.953V0M467.005 340.953V0M533.341 340.953V0M467.005 358V17.0466M666.015 340.953V0M732.348 340.953V0M798.685 340.953V0M865.022 340.953V0M931.359 340.953V0M1003 286.968H0M1003 251.451H0M1003 215.936H0M1003 180.42H0M1003 144.907H0M1003 109.39H0M1003 73.8729H0M1003 38.3601H0M1003 2.84319H0" stroke="url(#paint0_radial_195_20)" stroke-opacity="0.15" stroke-width="0.475745" stroke-dasharray="0.47 0.47"/>
                    <defs>
                        <radialGradient id="paint0_radial_195_20" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(501.5 179) rotate(90) scale(179 501.5)">
                        <stop stop-color="#FDC3B5"/>
                        <stop offset="1" stop-color="#B5D3FD" stop-opacity="0"/>
                        </radialGradient>
                    </defs>
                </svg>
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8 justify-center">
                    {clients.map((client,index) => (
                        <div key= {index} className="clinet-bg">
                            <img src={client.src} alt={`Client ${index + 1}`} />
                        </div>
                        ))
                    }
                </div>
            </div>
            <div ref={stats}>
                <h3 className="pt-8 mx-auto font-semibold text-2xl w-fit">
                    {t("Results & Analytics")}
                </h3>
                <div className="mt-12 flex max-sm:jutify-center items-center justify-between clients-frame h-fit flex-wrap shadow-2xl">
                    {statsData.map((item,index) => (
                        <div key={index} className="flex flex-col justify-center items-center px-[12px] py-[22px] relative w-[174px] " style={{
                            borderRadius: "5.41px",
                            background: "linearGradient(180deg, rgba(102, 102, 102, 0.09) 0%, rgba(0, 0, 0, 0.00) 100%)",
                        }}>
                            <div className='bg-[#F78546] absolute top-0 left-[50%] translate-x-[-50%] w-[15%] h-[1px] rounded-2xl'></div>
                            <div></div>
                            <div className='light-bg w-[84px]'></div>
                            <svg className="absolute  top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" width="124" height="83" viewBox="0 0 124 83" fill="none">
                                <path d="M8.73821 78.6081V0.67627M16.9187 78.6081V0.67627M25.0996 78.6081V0.67627M33.2805 78.6081V0.67627M41.4614 78.6081V0.67627M49.6419 78.6081V0.67627M57.8228 78.6081V0.67627M66.0037 78.6081V0.67627M57.8228 82.5045V4.57262M82.3655 78.6081V0.67627M90.546 78.6081V0.67627M98.7269 78.6081V0.67627M106.908 78.6081V0.67627M115.089 78.6081V0.67627M123.924 66.2687H0.22998M123.924 58.1506H0.22998M123.924 50.033H0.22998M123.924 41.9148H0.22998M123.924 33.7977H0.22998M123.924 25.6795H0.22998M123.924 17.5614H0.22998M123.924 9.44426H0.22998M123.924 1.32614H0.22998" stroke="url(#paint0_radial_236_291)" stroke-opacity="0.15" stroke-width="0.475745" stroke-dasharray="0.47 0.47"/>
                                <defs>
                                    <radialGradient id="paint0_radial_236_291" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.0769 41.5904) rotate(90) scale(40.9141 61.8469)">
                                    <stop stop-color="#FDC3B5"/>
                                    <stop offset="1" stop-color="#B5D3FD" stop-opacity="0"/>
                                    </radialGradient>
                                </defs>
                            </svg>
                            <p className="text-[30px] font-bold" ref={el => valueRefs.current[index] = el}>0</p>
                            <p className="text-[16px] font-bold">{t(item.title)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Clints
