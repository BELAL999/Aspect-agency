import { pages } from '../constatns/data';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../contexts/context';
import logo from '../assets/images/logo.png'
import clsx from "clsx"
import './headerDropdown.css'
import { GoX } from "react-icons/go";

const Header = () => {
    const {t,i18n , setActiveMenu , activeMenu} = useTheme();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <nav className='flex container w-full pt-[36px] items-center justify-between fixed z-20 left-[50%] translate-x-[-50%]'>
            <NavLink to="/" onClick={() => setActiveMenu(false)}>
                <img src={logo} alt="our logo" width={150}  className={clsx(activeMenu ? "hidden" : "")}/>
            </NavLink>
            <ul className={clsx('flex min-lg:px-[100px] gap-[48px] min-lg:py-[16px] max-lg:dropDown',
            activeMenu ? "dropDownItem " : "hide")}>
                {pages.map(page =>  (
                    <li key={page.id} className='text-xl '>
                        <NavLink to={page.path}>
                            {t(`navigation.${page.pageName.toLowerCase()}`)}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className='flex gap-[20px] max-lg:px-[40px]'>
                <button onClick={() => changeLanguage(i18n.language === 'en' ? "ar" : "en")} className='cursor-pointer text-xl'>
                    {i18n.language === 'en' ? 'العربية' : 'English'}
                </button>
                {/* 1px solid rgba(253, 136, 72, 0.80); */}
                <button className='text-xl relative  flex justify-center items-center gap-[8px] border border-[#fd8848cc] rounded-3xl px-[14px] py-[10px] cursor-pointer'>
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
            <div
  className={clsx(
    'min-lg:hidden w-[30px] h-[20px] cursor-pointer max-lg:absolute top-13 right-4 z-50 flex items-center justify-center',
    activeMenu ? '' : ''
  )}
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
    )
}

export default Header
