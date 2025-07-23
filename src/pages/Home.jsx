import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import About from '../components/About';
import Clints from '../components/Clints';
import Services from '../components/Services';
import OurWork from '../components/OurWork';



const Home = () => {
    const {t} = useTranslation();
    return (
        <main className=''>
            <Hero />
            <About />
            <Clints />
            <Services />
            <OurWork />
        </main>
    )
}

export default Home
