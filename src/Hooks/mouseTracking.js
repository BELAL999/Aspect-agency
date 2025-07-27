import { useEffect } from "react";
const mouseTracking = (wrapper , card) => {
        useEffect(()=>{
                const wrapper = document.querySelector(".services-container");
        const handleMouseMove = (e) => {
            const cards = document.getElementsByClassName("service");
            
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
        },[])
}

export default mouseTracking
