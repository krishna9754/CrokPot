import React from 'react'


const price = ["0 - 10", "10 - 50", "50 - 100", "100 -200"]

function Filter() {
    return (
        <div className='p-4 border border-black'>
            <p className='text-md py-2 '>Showing items</p>
            <div className='underline text-black w-ful h-1 border border-black'></div>
            <div>
                <p className='text-md pt-3 pb-2'>Price</p>
                {
                    price.map((item, index) => {
                        return (
                            <div key={index} className='w-40'>
                                <input type='checkbox' value="" /><span className='pl-2 font-thin'>{item}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Filter