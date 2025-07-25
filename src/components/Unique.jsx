import { useEffect, useRef } from 'react';
import { useTheme } from "../contexts/context";
import { FaRegLightbulb, FaUsers, FaRocket, FaUsersCog, FaComments, FaChartLine } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import TopSection from './TopSection';
import clsx from "clsx";

const Unique = () => {
    const { t } = useTheme();
    const container = useRef();
useEffect(() => {
    const wrapper = document.querySelector(".unique-features-wrapper");
    
    if (!wrapper) return; // Guard against missing element
    
    const handleMouseMove = (e) => {
        const cards = document.getElementsByClassName("unique-feature-card");
        
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
}, []);
    const uniqueFeatures = [
        {
            id: 1,
            icon: <FaRegLightbulb size={32} />,
            title: "Innovative Solutions",
            description: "We leverage the latest technologies to create cutting-edge solutions that give you a competitive edge."
        },
        {
            id: 2,
            icon: <FaUsers size={32} />,
            title: "Client-Centric Approach",
            description: "Your success is our priority. We work closely with you to understand your needs and deliver tailored results."
        },
        {
            id: 3,
            icon: <FaRocket size={32} />,
            title: "Proven Track Record",
            description: "With a history of successful projects and satisfied clients, we have a proven track record of excellence."
        },
        {
            id: 4,
            icon: <FaUsersCog size={32} />,
            title: "Expert Team",
            description: "Our team consists of experienced professionals dedicated to delivering high-quality work and innovative strategies."
        },
        {
            id: 5,
            icon: <FaComments size={32} />,
            title: "Transparent Communication",
            description: "We believe in open and honest communication, keeping you informed every step of the way for a collaborative partnership."
        },
        {
            id: 6,
            icon: <FaChartLine size={32} />,
            title: "Data-Driven Results",
            description: "We use data and analytics to drive our strategies, ensuring measurable results and a significant return on investment."
        }
    ];

    useGSAP(() => {
        gsap.from(".rightCard", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 30%",
                toggleActions: "play none none none",
                scrub: true,
            },
            opacity: 0,
            y: 50,
            x: -50,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
        });
        gsap.from(".leftCard", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 30%",
                toggleActions: "play none none none",
                scrub: true,
            },
            opacity: 0,
            y: 50,
            x: 50,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
        });

    }, { scope: container });

    return (
        <section ref={container} className="mt-32 flex flex-col items-center container overflow-hidden pt-12 pb-24">
            <TopSection text="Why choose us" />
            <div className="text-center mt-8">
                <h2 className="text-white text-4xl font-bold">{t("What Makes Us Unique")}</h2>
                <p className="text-stone-400 mt-4 max-w-2xl mx-auto">{t("Discover the key differentiators that set us apart from the competition and make us the ideal partner for your next project.")}</p>
            </div>
            <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 unique-features-wrapper">
                {uniqueFeatures.map((feature,index) => (
                    <div key={feature.id} className={clsx(" unique-feature-card" , index % 2 === 0 ? "rightCard" : "leftCard"  )}>
                        <div className={clsx("card-content  w-full ")}>
                            <div className="text-p1 mb-6">{feature.icon}</div>
                            <h3 className="text-white text-2xl font-bold mb-4">{t(feature.title)}</h3>
                            <p className="text-stone-300">{t(feature.description)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Unique;