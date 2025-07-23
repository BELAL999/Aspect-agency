import  { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/context';
import GlowingArcs from './Arc';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";



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

    // Set canvas to fixed position to stay on screen during scroll
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none'; // Allow clicks to pass through
    canvas.style.zIndex = '1'; // Put above other content temporarily to test visibility
    canvas.style.backgroundColor = 'transparent'; // Ensure transparent background

    class Star {
        constructor(x, y, radius, vx, vy) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.vx = vx;
            this.vy = vy;
            this.baseColor = `rgba(253, 136, 72, ${Math.random()})`;
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
            
            // Use CSS dimensions for boundary checking
            const canvasWidth = window.innerWidth;
            const canvasHeight = window.innerHeight;
            
            if (this.x < 0 || this.x > canvasWidth) this.x = Math.random() * canvasWidth;
            if (this.y < 0 || this.y > canvasHeight) this.y = Math.random() * canvasHeight;
            this.draw();
        }
    }
    
    function init() {
        stars.length = 0; 
        // Use CSS dimensions for star positioning
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;
        
        for (let i = 0; i < numStars; i++) {
            const x = Math.random() * canvasWidth;
            const y = Math.random() * canvasHeight;
            const radius = Math.random() * 1.2;
            const vx = (Math.random() - 0.5) * 0.1;
            const vy = (Math.random() - 0.5) * 0.1;
            stars.push(new Star(x, y, radius, vx, vy));
        }
    }

    function animate() {
        // Clear with CSS dimensions
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        stars.forEach(star => star.update());
        animationFrameId = requestAnimationFrame(animate);
    }

    const resizeCanvas = () => {
        // Set actual canvas dimensions (not just CSS)
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        
        // Scale the context to match device pixel ratio
        ctx.scale(dpr, dpr);
        
        // Set CSS size to viewport size
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        
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
