// context/GSAPContext.js
import  { createContext, useContext, useEffect, useRef,useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { useTranslation } from 'react-i18next';



const GSAPContext = createContext();

export const GSAPProvider = ({ children }) => {
    const lenisRef = useRef();
    const {t,i18n} = useTranslation();
    const [activeMenu,setActiveMenu] = useState(false)

    useEffect(() => {
        // Register plugins
    gsap.registerPlugin(ScrollTrigger);
        
        // Initialize Lenis
        lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
    });

    const lenis = lenisRef.current;

    // Connect with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
        
    const ticker = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    // --- Responsive menu auto-close logic ---
    const handleResize = () => {
        if (window.innerWidth > 1024 && activeMenu) {
            setActiveMenu(false);
        }
    };
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
        gsap.ticker.remove(ticker);
        lenis.destroy();
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        window.removeEventListener('resize', handleResize);
    };
    }, [activeMenu, setActiveMenu]);

    return (
        <GSAPContext.Provider value={{ lenis: lenisRef.current , t , i18n,activeMenu , setActiveMenu}}>
            {children}
        </GSAPContext.Provider>
    );
    };

export const useTheme = () => {
    const context = useContext(GSAPContext);
    if (!context) {
        throw new Error('useGSAP must be used within GSAPProvider');
    }
    return context;
};