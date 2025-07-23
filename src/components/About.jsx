import { useTheme } from '../contexts/context';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef} from "react"
import './about.css'


const About = () => {
  const svgRef = useRef(null);
useGSAP(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      start: "top-=100 center",
      end: "+=500",
      scrub : true,
      toggleActions: "play pause resume reset",
      markers: true
    }
  });

  tl.to(svgRef.current, {
    opacity: 1,
    ease: "power4.out",
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 3,
  })
  .from(".absoulte-center", {
    opacity: 0,
    // yPercent: -100,
    ease: "power4.out"
  })
  .from(".parag", {
    // Add your animation properties here
    opacity: 0,
    // yPercent: -100,
    duration : 4,
    ease: "power4.out"
  }).to(".about-p",{
    opacity : 1,
    stagger : 0.2,
    duration : 2,
    ease : "power4.out"
  })
});
  const {t} = useTheme();
  return (
    <section id='about' className='h-screen flex justify-center items-center relative flex-col '>
      <div className='relative outer'>
<svg width="330" height="170" xmlns="http://www.w3.org/2000/svg" ref={svgRef} style={{
  opacity: 0,
  clipPath: "polygon(50% 0, 50% 0%, 50% 100%, 50% 100%)"

}}>
  <defs>
    <linearGradient id="paint0_linear_120_628" x1="190.542" y1="-54.7383" x2="190.542" y2="299.996" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FD8848"/>
      <stop offset="0.5" stopColor="#ED350C"/>
      <stop offset="1" stopColor="#9C0901"/>
    </linearGradient>
  </defs>
  <path d="M 5,165 A 160,160 0 0,1 325,165" 
        stroke="url(#paint0_linear_120_628)" 
        strokeWidth="3" 
        fill="transparent" />
</svg>
      <p className='absoulte-center bg-over'>
        {t("about.overview")}
      </p>
      </div>
      <div className='text-center max-w-[651px] z-10 parag -mt-8'>
        <p className='about-p font-medium text-4xl text-p1 pb-4 mt-0'>What is Aspect ?</p>
              <p className='pb-[10px] about-p'>
        {t("about.slogan")}
      </p>
      <p className='pb-[48px] about-p'>
        {t("about.slogan-rest")}
      </p>
        <button className='about-button'>
          {t("about.Get Start")}
        </button>
      </div>
    </section>
  )
}

export default About
