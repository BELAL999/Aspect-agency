import { pages } from '../constatns/data';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/context';
import logo from '../assets/images/logo.png'
import logoWeb from '../assets/images/logo.webp'
import logoScroll from "../assets/images/logo 4.webp";
import logoScrollPng from "../assets/images/logo 4.png";
import clsx from "clsx";
import { GoX } from "react-icons/go";
import { useEffect,useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { BsFillSendFill } from "react-icons/bs";



const Header = () => {
    const {t,i18n , setActiveMenu , activeMenu} = useTheme();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    const [hasScroll ,setHasScroll] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 32 ){
                setHasScroll(true)
            } else {
                setHasScroll(false)
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () => (
            window.removeEventListener("scroll",handleScroll)
        )
    },[])

    return (
            <header className={clsx('z-40 flex h-14 mt-6 items-center fixed top-0 left-1/2 -translate-x-1/2 transition-[width,max-width,padding,background-color] duration-500 ease-in-out min-lg:border border-[#ffffff33] rounded-full px-2 py-1', hasScroll ? "glass-effect min-lg:w-[600px] w-full backdrop-blur-[10px]" : "max-w-[1000px] w-full")}>
            <nav className={clsx('flex max-lg:dropDown justify-between items-center flex-1 flex-nowrap',
                activeMenu ? "dropDownItem flex-col" : "hide" , hasScroll ? "" : "")}>
                <NavLink to="/" onClick={() => setActiveMenu(false)}>
                    <picture>
                        <source srcSet={hasScroll ? logoScroll : logoWeb} type="image/webp" />
                        <img src={hasScroll ? logoScrollPng : logo} alt="logo" width={hasScroll ? 45 : 120} height={hasScroll ? 36 : 26} loading="lazy" />
                    </picture>
                </NavLink>
                <ul className={clsx("flex gap-[48px] justify-center items-center max-lg:flex-col max-lg:py-[45px]",
                    hasScroll ? "min-lg:px-[32px]" : "min-lg:px-[100px]"
                )}>
                    {pages.map(page =>  (
                        <li key={page.id} className='min-lg:text-[16px] text-2xl '>
                            <NavLink to={page.path}>
                                {t(`navigation.${page.pageName.toLowerCase()}`)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-[20px] max-lg:flex-col justify-between'>
                        <button onClick={() => {
                            changeLanguage(i18n.language === 'en' ? "ar" : "en")
                            setActiveMenu(false)

                        }
                            } className='cursor-pointer text-xl text-p1 flex justify-center items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                                <path d="M1.23877 12.5C1.23877 19.1276 6.61117 24.5 13.2388 24.5C19.8664 24.5 25.2388 19.1276 25.2388 12.5C25.2388 5.8724 19.8664 0.5 13.2388 0.5C6.61117 0.5 1.23877 5.8724 1.23877 12.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M14.4386 0.560059C14.4386 0.560059 18.0386 5.30006 18.0386 12.5001C18.0386 19.7001 14.4386 24.4401 14.4386 24.4401M12.0386 24.4401C12.0386 24.4401 8.43863 19.7001 8.43863 12.5001C8.43863 5.30006 12.0386 0.560059 12.0386 0.560059M1.99463 16.7001H24.4826M1.99463 8.30006H24.4826" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>

                        <button
    className={clsx(
        "flex items-center justify-center gap-2 border border-[#ffffff33] cursor-pointer transition-all duration-300 ease-in-out",
        hasScroll
            ? "w-10 h-10 rounded-full p-0"
            : "px-[14px] py-[8px] rounded-3xl"
    )}
>
    {/* Pulsing dot is only visible when not scrolled */}
                    {!hasScroll && (
                        <div className="relative w-4 h-4">
                            <span className='absolute inset-0 m-auto bg-[#a20c0233] w-[18px] h-[18px] rounded-full dot-pulse'></span>
                            <span className='absolute inset-0 m-auto w-[13px] h-[13px] rounded-full bg-[#a20c0280] dot-pulse-2'></span>
                            <span className='absolute inset-0 m-auto w-[6px] h-[6px] rounded-full bg-[#A20C02] dot-pulse-3'></span>
                        </div>
                    )}

                    {/* The Send Icon is always present */}
                    <BsFillSendFill
                        className={clsx(
                            "text-white text-xl transition-transform duration-300 ease-in-out",
                            { "transform -rotate-45": !hasScroll } , hasScroll ? "" : "hidden"// Optional: adds a nice touch
                        )}
                    />

                    {/* The text smoothly hides and shows */}
                    <div
                        className={clsx(
                            "transition-all duration-300 ease-in-out overflow-hidden",
                            hasScroll ? "max-w-0 opacity-0" : "max-w-xs opacity-100 delay-300"
                        )}
                    >
                        <p className="text-p1 whitespace-nowrap">{t('navigation.contact')}</p>
                    </div>
                </button>

                </div>
            </nav>
                <div
    className={clsx(
        'min-lg:hidden cursor-pointer z-50 flex items-center justify-between w-full relative')}
    >
        {activeMenu ? null : <NavLink to="/" onClick={() => setActiveMenu(false)}>
                    <picture>
                        <source srcSet={logoWeb} type="image/webp" />
                        <img src={logo} alt="logo" width={120} height={26} loading="lazy" />
                    </picture>
                </NavLink>}
    {activeMenu ? (
        <GoX size={28} className='text-[#fd8848]'     onClick={() => {
        setActiveMenu(!activeMenu);
    }}/>
    ) : (
        <FiAlignJustify className='text-p1 text-2xl'      onClick={() => {
        setActiveMenu(!activeMenu);
    }}/>
    )}
    </div>
        </header>
    )
}

export default Header


