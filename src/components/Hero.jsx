import  { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/context';
import GlowingArcs from './Arc';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import heroArc from "../assets/images/arc.svg"


import './heroSection.css'
const HeroSection = () => {
    const arc = useRef(null);
    useGSAP(()=>{
        if(!arc.current) return;
        const tl = gsap.timeline();
        tl.to(arc.current,{
            opacity : 1,
            duration : 2,
            ease : "power4.out",
        })
        tl.to(".scroll-indicator",{
            opacity : 1,
            duration : 1,
            ease : "power4.out",
        }
        )
    },[])
    const {t} = useTheme();
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return; 
        const ctx = canvas.getContext('2d');
        const numStars = 150;
        const stars = [];
        let animationFrameId;
        class Star {
            constructor(x, y, radius, vx, vy) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.vx = vx;
                this.vy = vy;
                this.baseColor = `rgba(253, 136, 72 , ${Math.random()})`;
                this.color = this.baseColor;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if (this.x < 0 || this.x > canvas.width) this.x = Math.random() * canvas.width;
                if (this.y < 0 || this.y > canvas.height) this.y = Math.random() * canvas.height;
                this.draw();
            }
        }
        
        
        function init() {
            stars.length = 0; 
            for (let i = 0; i < numStars; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 1.2;
                const vx = (Math.random() - 0.5) * 0.1;
                const vy = (Math.random() - 0.5) * 0.1;
                stars.push(new Star(x, y, radius, vx, vy));
            }
        }
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(star => star.update());
            animationFrameId = requestAnimationFrame(animate);
        }
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            init(); 
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        animate(); 
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
            <section className="hero-section">
                <canvas id="starfield" ref={canvasRef}></canvas>
                <div className="hero-content">
                    <h1>{t('hero.header')}</h1>
                </div>
                <div className="scroll-indicator opacity-0">
                    Scroll Down
                    <div>
                        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 1L13 13L1 1" stroke="white" strokeWidth="0.857143" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <GlowingArcs ref={arc} pahtData = "M 100 150 Q 400 50 700 150"  />
                {/* <img src={heroArc} alt={heroArc} /> */}
            </section>

    );
};

// Main App component to render our HeroSection
export default function Hero() {
    return (
        <HeroSection />
    );
}
