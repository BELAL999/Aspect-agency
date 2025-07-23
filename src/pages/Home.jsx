import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import About from '../components/About';
import Clints from '../components/Clints';
import Services from '../components/Services';
import ServicesAR from '../components/ServicesAR';
import OurWork from '../components/OurWork';



const Home = () => {
    const {t,i18n} = useTranslation();
    return (
        <main className=''>
            <Hero />
            <About />
            <Clints />
            {
                i18n.language === "en" ?   <Services /> :  <ServicesAR />
            }
            <OurWork />
        </main>
    )
}

export default Home
