import React from 'react';

function OurHistory() {
    return (
        <div className='my-20 px-4'>
            <div className='flex flex-col md:flex-row w-full justify-center gap-10 md:gap-20 items-center mb-16'>
                <div className='w-full md:w-1/2 lg:w-1/3 px-4 py-8 md:py-0 md:text-left'>
                    <p className='text-4xl font-serif font-light py-8 text-center'>MADE IN VIET NAM SINCE 1450</p>
                    <p className='font-light pb-10 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <a href='/about'><p className='underline text-center'>LEARN MORE</p></a>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                    <img className='w-full h-auto md:h-96 object-cover' src="https://thepotterywheel.com/wp-content/uploads/2022/07/pressing-the-mold-into-the-slab.jpg" alt='offer' />
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse w-full justify-center gap-10 md:gap-20 items-center'>
                <div className='w-full md:w-1/2 lg:w-1/3 px-4 py-8 md:py-0 md:text-left'>
                    <p className='text-4xl font-serif font-light py-8 text-center'>OUR HISTORY</p>
                    <p className='font-light pb-10 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <a href='/about'><p className='underline text-center'>LEARN MORE</p></a>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                    <img className='w-full h-auto md:h-96 object-cover' src="https://thepotterywheel.com/wp-content/uploads/2022/07/marking-rim-of-plate.jpg" alt='offer' />
                </div>
            </div>
        </div>
    );
}

export default OurHistory;
