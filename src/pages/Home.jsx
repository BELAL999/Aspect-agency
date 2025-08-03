
import Hero from '../components/Hero';
import Clints from '../components/Clints';
import Services from '../components/Services';
import OurWork from '../components/OurWork';
import Plans from '../components/Plans';
import FAQ from '../components/FAQ';
import StartProject from '../components/StartProject';
import Unique from '../components/Unique';
import ABoutUs from '../components/AboutUs';



const Home = () => {
    return (
        <main className=''>
            <Hero />
            <ABoutUs />
            <Clints />
            <Services /> 
            <OurWork />
            <Plans />
            <Unique />
            <FAQ />
            <StartProject />
        </main>
    )
}

export default Home
