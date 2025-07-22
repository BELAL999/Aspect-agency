import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import About from '../components/About';
import Clints from '../components/Clints';


const Home = () => {
    const {t} = useTranslation();
    return (
        <main className=''>
            <Hero />
            <About />
            <Clints />
        </main>
    )
}

export default Home
