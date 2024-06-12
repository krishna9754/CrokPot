import React from 'react';
import OfferButton from '../button/OfferButton';

function Offer() {
    return (
        <div className='flex flex-col md:flex-row w-full justify-evenly items-center h-auto md:h-96 mb-20 px-4'>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4 py-8 md:py-0 text-center md:text-left'>
                <p className='text-2xl font-serif font-light py-8 text-center'>UP TO 40% OFF OUR CHRISTMAS COLLECTION</p>
                <p className='font-light pb-10 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                <OfferButton />
            </div>
            <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                <img className='w-full h-auto md:h-96 object-cover' src="https://i.ebayimg.com/thumbs/images/g/LoMAAOSwpi1l6mEh/s-l300.jpg" alt='offer' />
            </div>
        </div>
    );
}

export default Offer;
