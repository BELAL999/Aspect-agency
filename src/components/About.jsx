
import { useTheme } from '../contexts/context';
import './about.css'
import GlowingArcs from './Arc.jsx';


const About = () => {
  const {t} = useTheme();
  return (
    <section id='about' className='h-screen flex justify-center items-center relative border border-red-400'>
      <GlowingArcs pahtData="M 200 350 A 150 150 0 0 1 600 270"/>
    </section>
  )
}

export default About
