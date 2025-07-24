import {services} from "../constatns/data"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef,useState,useLayoutEffect} from "react"
import { useTheme } from "../contexts/context";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TopSection from "./TopSection";
// Register ScrollTrigger plugin

const Services = () => {
    const cardsRef = useRef(null);
    const {i18n} = useTheme();

useGSAP(() => {
    const cards = gsap.utils.toArray(".service");
    if (cards.length === 0) return;
    const cardWidth = 400;
    const gap = 32;
    const containerWidth = window.innerWidth;
    const totalCardsWidth = (cardWidth + gap) * cards.length - gap;
    let scrollDistance = (totalCardsWidth - containerWidth) + 400;
    
    gsap.to(cardsRef.current, {
        x : -scrollDistance,
        ease: "none",
        scrollTrigger: {
            trigger: ".service-section",
            pin: true,
            start: "top top",
            end: () => `+=${cards.length * 400}px`,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
                // Calculate which card should be in focus
                const progress = self.progress;
                const totalDistance = scrollDistance;
                const currentOffset = progress * totalDistance;
                const centerOfViewport = containerWidth / 2;
                
                cards.forEach((card, index) => {
                    const cardPosition = (cardWidth + gap) * index;
                    const cardCenter = cardPosition + cardWidth / 2;
                    const cardScreenPosition = cardCenter - currentOffset;
                    const distanceFromCenter = Math.abs(cardScreenPosition - centerOfViewport);
                    const isInFocus = distanceFromCenter < (cardWidth + gap) / 2;
                    if (isInFocus) {
                        gsap.to(card, {
                            duration: 0.3,
                            scale : 1.1,
                            ease: "power2.out"
                        });
                    } else {
                        gsap.to(card, {
                            duration: 0.3,
                            scale : 1,
                            ease: "power2.out"
                        });
                    }
                });
            }
        }
    });
    
}, [i18n.language]);


    return (
        <section className='h-screen border mt-32 flex flex-col items-center container service-section overflow-hidden pt-12'>
            <TopSection text="Services" />
            <div className="justify-start text-white text-3xl font-normal leading-[50.40px] pb-6">Explore Our Core Services</div>
            
            {/* Fixed container structure */}
            <div className='services-container w-full h-full flex items-center overflow-hidden'>
                <div ref={cardsRef} className='cards flex gap-8'>
                    {services.map((service) => (
                        <div key={service.id} className='service text-p1 px-[12px] py-[30px] bg-card rounded-[13px] border-[1px] border-[#FFF] overflow-hidden flex-shrink-0 w-[400px] opacity-[0.7] transition-all duration-500 hover:opacity-100'>
                            <p className="mb-[100px] text-4xl">{service.icon}</p>
                            <h3 className="text-[20px] font-bold pb-2">{service.title}</h3>
                            <p className="text-[16px] text-[#FFFFFFB2] font-normal leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services