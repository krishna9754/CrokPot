import React from 'react';
import heroImg from '../../image/Hero.jpg';
import Shop from '../button/Shop';

function Hero() {
    return (
        <div>
            <div className='w-full md:flex md:justify-end md:px-56' style={{ backgroundImage: `url(${heroImg})`, height: "700px", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='md:w-96 md:h-full w-full h-80 top-96 md:top-0 bg-yellow-800 items-start border-2 relative'>
                    <div className='absolute left-12 top-10 md:top-60 w-72 text-white flex flex-col justify-center items-center'>
                        <p className=' font-light py-4'>HandCrafted in Viet Nam Since 1650</p>
                        <p className='font-light font-serif text-4xl mb-10 text-center'>BAT TRANG DINNER SET</p>
                        <Shop />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
