import React from 'react';
import heroImg from '../home/image/Hero.jpg';
import logo from '../home/image/crokpot.png';
import Social from './social/Social';
import TouchUs from './touchUs/TouchUs';
import Form from './form/Form';
import Mapp from './map/Mapp';

function Contact() {
    return (
        <div className='w-full items-center flex flex-col justify-center'>
            <div className='w-full md:flex md:justify-start md:px-56' style={{ backgroundImage: `url(${heroImg})`, height: "500px", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='md:w-96 md:h-full w-full h-80 top-56 md:top-0 bg-yellow-800 items-start border-2 relative'>
                    <div className='absolute left-12 top-10 md:top-20 w-72 text-white flex flex-col justify-center items-center'>
                        <img className='w-24' src={logo} alt='logo' />
                        <p className=' font-light text-3xl font-serif'>CONTACT US</p>
                        <p className='font-light text-center py-4'>Follow us on social media</p>
                        <Social />
                    </div>
                </div>
            </div>
            <TouchUs />
            <Form />
            <Mapp />
        </div>
    );
}

export default Contact;
