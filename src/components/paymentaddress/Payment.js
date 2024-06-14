import React from 'react'

function Payment() {
    return (
        <div className='mt-20'>
            <div className='flex w-full gap-48 mb-4'>
                <h2 className='text-xl font-medium'>Product</h2>
                <h2 className='text-xl font-medium'>SubTotal</h2>
            </div>
            <div className='border-gray-400 flex border-b justify-between border-t items-end'>
                <div className=' my-4 py-2'>
                    <p className='font-light'>name</p>
                    <p className='font-light'>Shipping</p>
                </div>
                <div className=' my-4 py-2'>
                    <p className='font-light'>$100</p>
                    <p className=''>$5</p>
                </div>
            </div>
            <div className='mt-4 flex justify-between'>
                <p className='text-xl '>Total</p>
                <p className='text-xl '>$105</p>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Payment