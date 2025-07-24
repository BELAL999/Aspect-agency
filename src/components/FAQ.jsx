import { useState, useRef } from 'react';
import { faqData } from '../constatns/data';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { GoPlus, GoDash } from "react-icons/go";

const FAQ = () => {
    const [openAccordion, setOpenAccordion] = useState(faqData.length > 0 ? faqData[0].id : null);
    const container = useRef();

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    useGSAP(() => {
        gsap.from(".faq-item", {
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
            <div className="h-12 px-3.5 bg-stone-900/10 rounded-[124.42px] outline-[1.24px] outline-offset-[-1.24px] outline-stone-200/10 backdrop-blur-[6.22px] inline-flex justify-center items-center gap-3">
                <div className="text-center justify-start text-white text-xl font-medium leading-loose">FAQ</div>
            </div>
            <div className="text-center mt-8">
                <h2 className="text-white text-4xl font-bold">Frequently Asked Questions</h2>
                <p className="text-stone-400 mt-4 max-w-2xl mx-auto">Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us.</p>
            </div>
            <div className="mt-16 w-full max-w-4xl flex flex-col gap-8 justify-center items-center">
                {faqData.map((item) => (
                    <div key={item.id} className="border-b border-stone-200/10 faq-item bg-[#201F1F66] px-8 py-4 rounded-2xl">
                        <button onClick={() => toggleAccordion(item.id)} className="w-full flex justify-between items-center text-left py-6">
                            <h3 className="text-white text-xl font-semibold">{item.question}</h3>
                            <span className="text-p1 text-2xl transition-transform duration-300">{openAccordion === item.id ? <GoDash /> : <GoPlus />}</span>
                        </button>
                        <div className="overflow-hidden transition-all duration-500 ease-in-out" style={{ maxHeight: openAccordion === item.id ? '200px' : '0px' }}>
                            <p className="text-stone-300 pb-6 pr-8">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;