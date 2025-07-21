import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import About from '../components/About';

const Home = () => {
    const {t} = useTranslation();
    return (
        <main className=''>
            <Hero />
            <About />
        </main>
    )
}

export default Home
