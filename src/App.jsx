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
  useEffect(() => {
    document.body.dir = i18n.dir();
    document.body.setAttribute('lang', i18n.language);
  }, [i18n.language]);
  gsap.registerPlugin(ScrollTrigger);
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

