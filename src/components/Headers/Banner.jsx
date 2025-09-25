import React from 'react';
import bannerImg from '../../assets/banner-main.png';
import bannreShadow from '../../assets/bg-shadow.png'

const Banner = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center py-16 rounded-2xl mt-6" style={{backgroundImage: `url(${bannreShadow})`}}>
            <img className='w-auto h-50' src={bannerImg} alt="banner image" />
            <h1 className='font-bold text-[2.5rem] text-[#FFFFFF]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className='font-medium text-2xl text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</h3>
            <button className='font-bold border-1 border-[#E7FE29] rounded-xl py-4 px-2 text-black'>
                <span className='bg-[#E7FE29] py-2 px-4 rounded-md'>Claim Free Credit</span>
            </button>
        </div>
    );
};

export default Banner;