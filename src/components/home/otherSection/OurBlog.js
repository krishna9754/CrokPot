import React from 'react';

function OurBlog() {
    return (
        <div className='my-10 px-4'>
            <h1 className='my-4 font-serif text-4xl w-full text-center'>OUR BLOG</h1>
            <div className='flex flex-col md:flex-row w-full mt-16 justify-center gap-10 md:gap-20 items-center'>
                <div className='w-full md:w-1/2 lg:w-1/3 px-4 py-8 md:py-0 text-center md:text-left'>
                    <p className='text-gray-400 font-serif text-2xl py-8 text-center'>TABLEWARE</p>
                    <p className='text-2xl font-serif font-light pb-4 text-center'>THE SECRET TO A KITCHEN ROOM</p>
                    <p className='font-light pb-10 text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                    <p className='underline text-center'>READ MORE</p>
                </div>
                <div className='w-full md:w-1/2 lg:w-1/3 px-4'>
                    <img className='w-full h-auto md:h-96 object-cover' src="https://cdn.thewirecutter.com/wp-content/media/2023/05/dinnerware-2048px-0021-3x2-1.jpg?auto=webp&quality=75&width=1024" alt='offer' />
                </div>
            </div>
        </div>
    );
}

export default OurBlog;
