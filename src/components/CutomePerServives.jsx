import React from 'react'

const CutomePerServives = React.memo(({id, title, price, count, onCountChange}) => {
    return (
        <div key={id} className='flex flex-col justify-center items-center p-3 gap-4 border-[0.5px] border-stone-200/20 rounded-[12px] bg-[#0a090a80] '>
            <div className='text-p1 text-[18px] font-medium'>{title}</div>
            <div className='flex justify-between items-center w-full px-2'>
                <p className='text-p1'>Total price:</p>
                <p className='text-p1'>{`${price * count}$`}</p>
            </div>
            <div className='bg-[#3130304d] w-full flex justify-between items-center px-2 py-1 rounded-[8px]'>
                <span className='bg-white w-6 h-6 flex justify-center items-center rounded-full' onClick={() => {
                    if (count > 0) onCountChange(id, count - 1);
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="1" viewBox="0 0 7 1" fill="none">
                        <path d="M0.785645 0.5H6.45231" stroke="black" strokeWidth="0.809524" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </span>
                <span className='text-p1'>{count}</span>
                <span className='bg-[#ED350D] w-6 h-6 flex justify-center items-center rounded-full' onClick={() => onCountChange(id, count + 1)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none">
                        <path d="M3.38086 0.868652C3.43453 0.868652 3.48646 0.890269 3.52441 0.928223C3.5622 0.966058 3.58386 1.01734 3.58398 1.0708V3.29736H5.80957C5.86325 3.29736 5.91517 3.31898 5.95312 3.35693C5.99086 3.39479 6.01163 3.44606 6.01172 3.49951C6.01172 3.55315 5.99104 3.60512 5.95312 3.64307C5.91517 3.68102 5.86325 3.70264 5.80957 3.70264H3.58398V5.92822C3.58398 5.9819 3.56237 6.03382 3.52441 6.07178C3.48647 6.10969 3.4345 6.13037 3.38086 6.13037C3.32741 6.13029 3.27614 6.10951 3.23828 6.07178C3.20033 6.03382 3.17871 5.9819 3.17871 5.92822V3.70264H0.952148C0.898685 3.70251 0.847406 3.68085 0.80957 3.64307C0.771616 3.60511 0.75 3.55319 0.75 3.49951C0.750086 3.44599 0.771737 3.3948 0.80957 3.35693C0.847415 3.31909 0.898642 3.29749 0.952148 3.29736H3.17871V1.0708C3.17883 1.01729 3.20044 0.966067 3.23828 0.928223C3.27615 0.890389 3.32733 0.868738 3.38086 0.868652Z" stroke="white" strokeWidth="0.404762"/>
                    </svg>
                </span>
            </div>
        </div>   
    )
});

export default CutomePerServives
