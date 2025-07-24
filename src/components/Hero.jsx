import  { useRef } from 'react';
import { useTheme } from '../contexts/context';
import GlowingArcs from './Arc';
import { useStarfield } from '../Hooks/useStarfield';




import './heroSection.css'
const HeroSection = () => {
    const {t} = useTheme();
    const canvasRef = useRef(null);
    useStarfield(canvasRef);

    return (
            <section className="hero-section">
                <canvas id="starfield" ref={canvasRef}></canvas>
                <div className="hero-content">
                <h1>{t('hero.header')}</h1>
                </div>
                <div className="scroll-indicator">
                    {t('Scroll Down')}
                    <div>
                        <svg width="26" height="14" viewBox="0 0 26 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25 1L13 13L1 1" stroke="white" strokeWidth="0.857143" strokeLinecap="round"/>
                        </svg>
                    </div>
                </div>
                <GlowingArcs  pathData = "M 100 150 Q 400 50 700 150"  />
            </section>

    );
};

// Main App component to render our HeroSection
export default function Hero() {
    return (
        <HeroSection />
    );
}
