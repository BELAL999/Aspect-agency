import {services} from '../constatns/data'
import CutomePerServives from './CutomePerServives'
import { useState, useMemo, useCallback } from 'react'

const CustomePakage = () => {
    // Track count for each service by id
    const [serviceCounts, setServiceCounts] = useState(() => {
        const initial = {};
        services.forEach(s => { initial[s.id] = 1 });
        return initial;
    });

    // Handler to update count for a service, memoized
    const handleCountChange = useCallback((id, newCount) => {
        setServiceCounts(prev => ({ ...prev, [id]: newCount }));
    }, []);

    // Memoize total price calculation, start from 0 not 1000
    const totalPrice = useMemo(() => {
        return services.reduce((sum, service) => {
            return sum + (service.price * (serviceCounts[service.id] || 0));
        }, 0);
    }, [serviceCounts, services]);

    return (
        <div className='w-full mt-12'>
            <div className='storkeForFrame max-w-[1249px] flex items-center justify-between py-6 px-12 w-full bg-[#0a090a80] rounded-[24px] flex-col min-lg:flex-row gap-y-2'>
                <div className='flex gap-4 items-center justify-center '>
                    <div className="p-2.5 bg-stone-900 rounded-[100px] inline-flex justify-start items-center gap-2.5">
                        <div className="w-6 h-6 relative">
                            <div className="w-4 h-4 left-[4.36px] top-[4.36px] absolute border-1 border-white" />
                            <div className="w-6 h-6 left-0 top-0 absolute rounded border-2 border-white" />
                        </div>
                    </div>
                    <p className='text-white text-xl font-semibold'> 
                        Customize your package
                    </p>
                </div>
                <ul className='w-full lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-y-4 justify-between items-center justify-items-center'>
                    {services.map((service) => (
                        <div key={service.id} className='flex gap-2 justify-start items-center text-[16px]  w-fit sm:w-full'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" viewBox="0 0 17 13" fill="none">
                                <path d="M6.34055 12.5219C6.20344 12.5214 6.06788 12.4928 5.9423 12.4378C5.81671 12.3827 5.70379 12.3024 5.61055 12.2019L0.750555 7.03188C0.568881 6.83828 0.471559 6.58043 0.479999 6.31506C0.488438 6.0497 0.601947 5.79856 0.795555 5.61688C0.989163 5.43521 1.24701 5.33789 1.51237 5.34633C1.77774 5.35477 2.02888 5.46828 2.21055 5.66188L6.33055 10.0519L14.7406 0.851883C14.8259 0.745606 14.9321 0.657898 15.0525 0.594146C15.173 0.530395 15.3053 0.491947 15.4411 0.481162C15.577 0.470378 15.7137 0.487486 15.8427 0.531434C15.9717 0.575383 16.0904 0.645245 16.1914 0.736729C16.2925 0.828213 16.3738 0.939388 16.4303 1.06343C16.4868 1.18746 16.5173 1.32174 16.5201 1.45802C16.5228 1.5943 16.4976 1.72969 16.4461 1.85589C16.3946 1.98209 16.3179 2.09643 16.2206 2.19188L7.08055 12.1919C6.9882 12.2942 6.87567 12.3764 6.75004 12.4332C6.62442 12.49 6.48841 12.5202 6.35055 12.5219H6.34055Z" fill="white" fill-opacity="0.6"/>
                                </svg>
                            </span>
                            <p className='text-p1'>{service.title}</p>
                        </div>
                    ))}
                </ul>
            </div>
            <div className='strokeForFrame max-w-[1249px] flex items-center justify-between py-6 px-12 w-full bg-[#0a090a80] rounded-[24px] mt-8 flex-col'>
                <div className='text-p1 font-bold text-2xl'>
                    <p>Customize your package</p>
                </div>
                <div className='grid grid-cols-3 justify-items-between items-center w-full gap-3 pt-8'>
                    {services.map((service) => (
                        <CutomePerServives 
                            key={service.id}
                            id={service.id}
                            title={service.title}
                            price={service.price}
                            count={serviceCounts[service.id] || 0}
                            onCountChange={handleCountChange}
                        />
                    ))}
                </div>
                <div className='flex items-center mt-8 justify-between w-full gap-6'>
                    <div className='max-w-[279px] flex items-center justify-center gap-4 border border-[#FFFFFF1A] rounded-[12px] px-4 py-2'>
                        <p className='text-p1 text-[18px] font-semibold'>Total price:</p>
                        <p className='text-p1 text-[18px] font-semibold'>{`${totalPrice}$`}</p>
                    </div>
                    <button className='about-button text-white flex-1'>
                        Order now 
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CustomePakage
