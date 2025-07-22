import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef,useState} from "react"
const Clints = () => {
    const lightSvg = useRef(null);
    const [clients,setClients] = useState(Array.from({ length: 18 }, (_, i) => ({
        src: `/clients/${i + 1}.png`
    })))
    useGSAP(()=>{
        gsap.set(".light-bg",{
            y : "-300"
        })
        gsap.to(".light-bg",{
            y : "0",
            scrollTrigger:{
                trigger : ".outerFrame",
                start : "top center" ,
                end : "+=200",
                scrub: true ,
                markers : true,
                pin:   true

            }
        })
    })
    return (
        <section className='text-p1 w-screen container mb-[1000px] outerFrame '>
            <p className="truested pb-8">Trusted by</p>
            <div className="relative clients-frame overflow-hidden">
                <div className='light-bg'></div>
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
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-8">
                    {clients.map((client,index) => (
                        <div key= {index} className="clinet-bg">
                            <img src={client.src} alt={`Client ${index + 1}`} />
                        </div>
                        ))
                    }
                </div>
            </div>
            {/* start of the clinet  */}
        </section>
    )
}

export default Clints
