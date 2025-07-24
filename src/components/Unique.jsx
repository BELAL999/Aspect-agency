import { useRef } from 'react';
import { useTheme } from "../contexts/context";
import { FaRegLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import TopSection from './TopSection';

const Unique = () => {
    const { t } = useTheme();
    const container = useRef();

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
        }
    ];

    useGSAP(() => {
        gsap.from(".unique-feature-card", {
            scrollTrigger: {
                trigger: container.current,
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
        <section ref={container} className="mt-32 flex flex-col items-center container overflow-hidden pt-12 pb-24">
            <TopSection text="Why choose us" />
            <div className="text-center mt-8">
                <h2 className="text-white text-4xl font-bold">{t("What Makes Us Unique")}</h2>
                <p className="text-stone-400 mt-4 max-w-2xl mx-auto">{t("Discover the key differentiators that set us apart from the competition and make us the ideal partner for your next project.")}</p>
            </div>
            <div className="mt-16 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
                {uniqueFeatures.map((feature) => (
                    <div key={feature.id} className="bg-stone-900/20 border border-stone-200/10 p-8 rounded-2xl flex flex-col items-center text-center unique-feature-card">
                        <div className="text-p1 mb-6">{feature.icon}</div>
                        <h3 className="text-white text-2xl font-bold mb-4">{t(feature.title)}</h3>
                        <p className="text-stone-300">{t(feature.description)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Unique;