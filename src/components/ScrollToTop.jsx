import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth' // This is the magic! ✨
        });
    }, [pathname]);

    return null; // This component does not render anything
}

export default ScrollToTop;