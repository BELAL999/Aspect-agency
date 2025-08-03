import  { useMemo } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTheme } from '../contexts/context';


const getImageUrl = (seed) =>
  `https://picsum.photos/seed/${seed}/300/200`;


const AboutUs = () => {
  const { t } = useTheme();

  useGSAP(() => {
    // Background animations
    gsap.set('.lightBg', { yPercent: -100 , height: '0' });
    gsap.to('.darkBg', {
      opacity: 0,
      scrollTrigger: {
        trigger: '.aspect',
        start: 'top center',
        end: '+=500',
        scrub: true,
      },
    });

    gsap.to('.lightBg', {
      yPercent: 0,
      height: '40%',
      filter: 'blur(150px)',
      scrollTrigger: {
        trigger: '.aspect',
        start: 'top 40%',
        end: '+=300',
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    });
    gsap.to('.gridBg', {
      height: '100%',
      scrollTrigger: {
        trigger: '.aspect',
        start: 'top center',
        end: '+=500',
        scrub: true,
        // markers: true, // Uncomment for debugging
      },
    });

    // Reusable function for conveyor effect
    const animateGallery = (selector, direction) => {
      gsap.to(selector, {
        duration: 5,
        ease: 'none',
        x: direction === 'right' ? '+=50' : '-=50',
        scrollTrigger: {
          trigger: '.about-us',
          start: 'top center',
          end: '+=500',
          scrub: true,
        },
      });
    };

    animateGallery('.g1', 'right');
    animateGallery('.g2', 'left');
    animateGallery('.g3', 'right');
  }, []);

  const imageCount = 10;
  const imageColumns = useMemo(() => {
    const columns = { g1: [], g2: [], g3: [] };
    for (let i = 0; i < imageCount; i++) {
      columns.g1.push(getImageUrl(`g1-${i}`));
      columns.g2.push(getImageUrl(`g2-${i}`));
      columns.g3.push(getImageUrl(`g3-${i}`));
    }
    return columns;
  }, []);

  const renderImageColumn = (columnId, images, className) =>
    images.map((src, index) => (
      <img
        key={`${columnId}-img-${index}`}
        src={src}
        alt={`Gallery image ${columnId}-${index}`}
        loading="lazy"
        className={`rounded-lg shadow-md w-[300px] h-full object-cover ${className}`}
      />
    ));

  return (
    <section className='w-full min-h-screen flex flex-col justify-center p-8 overflow-hidden mb-12 about-us relative'>
      <div className='darkBg absolute inset-0'></div>
      <div className='gridBg absolute inset-0'></div>
      <div className='lightBg absolute inset-0'></div>

      <div className='g1 flex gap-4 p-2 items-center justify-center h-1/3'>
        {renderImageColumn('g1', imageColumns.g1, 'g1')}
      </div>
      <div className='g2 flex gap-4 p-2 items-center justify-center h-1/3'>
        {renderImageColumn('g2', imageColumns.g2, 'g2')}
      </div>
      <div className='g3 flex gap-4 p-2 items-center justify-center h-1/3'>
        {renderImageColumn('g3', imageColumns.g3, 'g3')}
      </div>

      <div className='text-center max-w-[651px] z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[280px]'>
        <p className='font-medium text-4xl text-p1 pb-4  bg-over aspect'>{t('about.what is aspect')}</p>
        <p className='pb-2 text-p1'>{t('about.slogan')}</p>
        <p className='pb-12 text-p1'>{t('about.slogan-rest')}</p>
        <button className='about-button text-p1'>{t('about.Get Start')}</button>
      </div>
    </section>
  );
};

export default AboutUs;
