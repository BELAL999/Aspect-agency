import {useEffect} from 'react'

const strokeEffect = (card , wrapper) => {
    useEffect(() => {
        const wrapperEl = document.querySelector(wrapper);
        if (!wrapperEl) return;
        const cards = document.querySelectorAll(card);
    
        // Exit early if the wrapper element isn't found
    
        // 1. Define the event handler functions
        const handleMouseMove = (event) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
    
                card.style.background = `radial-gradient(350px circle at ${x}px ${y}px, rgba(255, 116, 40, 0.5), transparent 70%), linear-gradient(180deg, rgba(32, 31, 31, 0.90) 0%, #000 100%)`;
            });
        };
    
        const handleMouseLeave = () => {
            cards.forEach((card) => {
                // Reset the background to its default state
                card.style.background = `black`;
            });
        };
    
        // 2. Add the event listeners using the named functions
        wrapperEl.addEventListener("mousemove", handleMouseMove);
        wrapperEl.addEventListener("mouseleave", handleMouseLeave);
    
        // 3. Return a cleanup function
        return () => {
            wrapperEl.removeEventListener("mousemove", handleMouseMove);
            wrapperEl.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);
}

export default strokeEffect
