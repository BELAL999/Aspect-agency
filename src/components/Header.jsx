import { pages } from '../constatns/data';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/context';
import logo from '../assets/images/logo.png'
import logoWeb from '../assets/images/logo.webp'
import clsx from "clsx"
import { GoX } from "react-icons/go";
import { useEffect,useState } from 'react';

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
        <header > 
            <nav className={clsx('z-40 flex max-w-[1000px] w-full mt-6 items-center justify-between fixed top-0 left-1/2 -translate-x-1/2 transition-all duration-500 min-lg:border border-[#ffffff33] rounded-full px-2 py-1',hasScroll ? "glass-effect" :"")}>
                <NavLink to="/" onClick={() => setActiveMenu(false)}>
                    <picture>
                        <source srcSet={logoWeb} type="image/webp" />
                        <img src={logo} alt="logo" width={120} height={26} loading="lazy" />
                    </picture>
                </NavLink>
                <ul className={clsx('flex min-lg:px-[100px] gap-[48px] min-lg:py-[8px] max-lg:dropDown',
                activeMenu ? "dropDownItem " : "hide")}>
                    {pages.map(page =>  (
                        <li key={page.id} className='min-lg:text-[16px] text-2xl '>
                            <NavLink to={page.path}>
                                {t(`navigation.${page.pageName.toLowerCase()}`)}
                            </NavLink>
                        </li>
                    ))}
                    {activeMenu && <li>
                    <div className='flex gap-[20px] flex-col justify-between'>
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
                        {/* 1px solid rgba(253, 136, 72, 0.80); */}
                        <button className='text-xl relative  flex justify-center items-center gap-[8px] border border-[#fd8848cc] rounded-3xl px-[14px] py-[8px] cursor-pointer'>
                            <div className='flex justify-center items-center'>
                                <div className='relative flex items-center justify-center min-w-[28px] min-h-[28px]'>
                                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a20c0233] w-[18px] h-[18px] rounded-full dot-pulse'></span>
                                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13px] h-[13px] rounded-full bg-[#a20c0280] dot-pulse-2'></span>
                                    <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#A20C02] dot-pulse-3'></span>
                                </div>
                            </div>
                            <p>{t('navigation.contact')}</p>
                        </button>
                </div>
                    </li>}

                </ul>
                <div className='flex gap-[20px]  max-lg:hidden'>
                    <button onClick={() => changeLanguage(i18n.language === 'en' ? "ar" : "en")} className='cursor-pointer text-xl text-p1 '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
                            <path d="M1.23877 12.5C1.23877 19.1276 6.61117 24.5 13.2388 24.5C19.8664 24.5 25.2388 19.1276 25.2388 12.5C25.2388 5.8724 19.8664 0.5 13.2388 0.5C6.61117 0.5 1.23877 5.8724 1.23877 12.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.4386 0.560059C14.4386 0.560059 18.0386 5.30006 18.0386 12.5001C18.0386 19.7001 14.4386 24.4401 14.4386 24.4401M12.0386 24.4401C12.0386 24.4401 8.43863 19.7001 8.43863 12.5001C8.43863 5.30006 12.0386 0.560059 12.0386 0.560059M1.99463 16.7001H24.4826M1.99463 8.30006H24.4826" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    {/* 1px solid rgba(253, 136, 72, 0.80); */}
                    <button className='text-xl relative  flex justify-center items-center gap-[8px] border border-[#ffffff33] rounded-3xl px-[14px] py-[6px] cursor-pointer'>
                        <div className='flex justify-center items-center '>
                            <div className='relative flex items-center justify-center min-w-[28px] min-h-[28px]'>
                                <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#a20c0233] w-[18px] h-[18px] rounded-full dot-pulse'></span>
                                <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[13px] h-[13px] rounded-full bg-[#a20c0280] dot-pulse-2'></span>
                                <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[6px] h-[6px] rounded-full bg-[#A20C02] dot-pulse-3'></span>
                            </div>
                        </div>
                        <p className='text-p1'>{t('navigation.contact')}</p>
                    </button>
                </div>
                <div
    className={clsx(
        'min-lg:hidden w-[30px] h-[20px] cursor-pointer max-lg:absolute top-0 z-50 flex items-center justify-center',
        i18n.language === 'en' ? 'right-4' : 'left-4')}
    onClick={() => {
        setActiveMenu(!activeMenu);
    }}
    >
    {activeMenu ? (
        <GoX size={28} className='text-[#fd8848]'/>
    ) : (
        <>
        <span className='w-6 h-0.5 bg-p1 absolute top-0'></span>
        <span className='w-6 h-0.5 bg-p1 absolute top-2'></span>
        <span className='w-6 h-0.5 bg-p1 absolute top-4'></span>
        </>
    )}
    </div>
            </nav>
        </header>
    )
}

export default Header
