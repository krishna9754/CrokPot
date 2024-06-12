import React from 'react';
import logo from '../image/crokpot.png';
import '../button/getStart.css';

function Fotter() {
    return (
        <div className='w-full bg-black grid justify-center'>
            <div className='lg:flex lg:justify-evenly text-center border-b-2 lg:border-white pb-10'>
                <div className='lg:border-r-2 border-white lg:pr-10 grid ml-10'>
                    <div className='w-64 flex justify-center'>
                        <img className='w-32 h-auto mt-10' src={logo} alt='logo' />
                    </div>
                    <p className='font-light text-white w-64 my-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <button className='custom-btn btn-1'>GET STARTED</button>
                </div>
                <div className='gap-32 flex flex-wrap justify-center md:justify-start md:mx-6 lg:gap-28 mt-14 text-center '>
                    <div className='text-white'>
                        <h2 className='mb-3'>ABOUT US</h2>
                        <p className='font-thin mb-2'>Mission</p>
                        <p className='font-thin mb-2'>Our Team</p>
                        <p className='font-thin mb-2'>Awards</p>
                        <p className='font-thin mb-2'>Testimonials</p>
                        <p className='font-thin mb-2'>Privacy Policy</p>
                    </div>
                    <div className='text-white'>
                        <h2 className='mb-3'>SERVICES</h2>
                        <p className='font-thin mb-2'>Web design</p>
                        <p className='font-thin mb-2'>Web development</p>
                        <p className='font-thin mb-2'>Mobile design</p>
                        <p className='font-thin mb-2'>UX/UI design</p>
                        <p className='font-thin mb-2'>Branding design</p>
                    </div>
                    <div className='text-white'>
                        <h2 className='mb-3'>PORTFOLIO</h2>
                        <p className='font-thin mb-2'>Corporate website</p>
                        <p className='font-thin mb-2'>E-commerce</p>
                        <p className='font-thin mb-2'>Mobile App</p>
                        <p className='font-thin mb-2'>Landing pages</p>
                        <p className='font-thin mb-2'>UX/UI Projects</p>
                    </div>
                </div>
            </div>
            <p className='text-gray-500 text-center mt-4'>2024 ProductZZ | All Rights Reserved</p>
        </div>
    );
}

export default Fotter;
