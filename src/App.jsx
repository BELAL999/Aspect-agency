import { Routes, Route, BrowserRouter} from "react-router"
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./pages/Layout"
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './i18n';
import Home from "./pages/Home";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const App = () => {
  const {i18n } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);
useEffect(() => {
    document.body.dir = i18n.dir();
    document.body.setAttribute('lang', i18n.language);
    // setTimeout(() => {
    //   // Try to use Lenis for smooth scroll if available
    //   const lenis = window.__lenisInstance || (window.GSAPContext && window.GSAPContext.lenis);
    //   if (lenis && typeof lenis.scrollTo === 'function') {
    //     lenis.scrollTo(0, { immediate: true });
    //   } else {
    //     window.scrollTo({
    //       top: 0,
    //       left: 0,
    //       behavior: 'smooth'
    //     });
    //   }
    // }, 0);
    
}, [i18n,i18n.language]);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path ="/"  element={<Layout/>} >
          <Route index element ={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App

