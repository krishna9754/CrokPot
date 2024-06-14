import React, { useState } from 'react';
import logo from '../image/crokpot.png';
import Cart from '../home/cart/Cart';

import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className='border-2'>
                <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between'>
                    <div className='w-20 flex flex-shrink-0 items-center'>
                        <img className='w-auto' src={logo} alt='logo' />
                    </div>
                    <div className='hidden sm:ml-6 sm:block'>
                        <div className='px-2 pb-3 pt-2 flex space-x-10'>
                            <a href="/" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>Home</a>
                            <a href="/shop" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>Shop</a>
                            <a href="/about" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>About</a>
                            <a href="/contact" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>Contact</a>
                        </div>
                    </div>
                    <div>
                        <a href='/login'><Cart /></a>
                    </div>

                    {/* Menu Icon for Mobile View */}
                    <div className='sm:hidden'>
                        <button onClick={toggleMobileMenu} className='text-xl'>
                            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile View */}
                <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                    <div className='space-y-1 px-2 pb-3 pt-2 text-center'>
                        <a href="/" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>Home</a>
                        <a href="/shop" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>Shop</a>
                        <a href="/about" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>About</a>
                        <a href="/contact" className='block rounded-md px-3 py-2 text-base font-thin hover:bg-orange-400 hover:text-white'>Contact</a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
