import React from 'react';

const Achievement = () => {
    return (
        <>
            <div className='bg-[#282A37] py-20 md:py-20 lg:py-24 xl:py-[10.5rem]'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-around container'>
                    <div className='flex flex-col lg:flex-row items-center space-x-6'>
                        <img className='p-6 border-[0.125rem] border-[#40424d] rounded-2xl mr-10' src="assets/img/counterup-icon-1.webp" alt="" />
                        <div className=''>
                            <p className='text-[3.25rem] text-white font-poppins mb-6'>256+</p>
                            <p className='text-[#858792] font-poppins'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center space-x-6'>
                        <img className='p-6 border-[0.125rem] border-[#40424d] rounded-2xl mr-10' src="assets/img/counterup-icon-2.webp" alt="" />
                        <div className=''>
                            <p className='text-[3.25rem] text-white font-poppins mb-6'>256k</p>
                            <p className='text-[#858792] font-poppins'>Happy Clients</p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center space-x-6'>
                        <img className='p-6 border-[0.125rem] border-[#40424d] rounded-2xl mr-10' src="assets/img/counterup-icon-3.webp" alt="" />
                        <div className=''>
                            <p className='text-[3.25rem] text-white font-poppins mb-6'>256+</p>
                            <p className='text-[#858792] font-poppins'>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Achievement;