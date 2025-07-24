import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import About from '../components/About';
import Clints from '../components/Clints';
import Services from '../components/Services';
import ServicesAR from '../components/ServicesAR';
import OurWork from '../components/OurWork';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import StartProject from '../components/StartProject';
import Unique from '../components/Unique';



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
            <Plans />
            <Unique />
            <FAQ />
            <StartProject />
        </main>
    )
}

export default Home
