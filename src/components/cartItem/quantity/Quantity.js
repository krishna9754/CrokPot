import React, { useState } from 'react'

function Quantity() {
    const [limit, setLimit] = useState(1)

    const limitNeg = () => {
        if (limit > 1) {
            setLimit(limit - 1)
        }
    }

    return (
        <div className='w-full border-black border-2 h-10'>
            <div className='flex w-full px-10 justify-between items-center text-center'>
                <p className='text-3xl border-black border-r font-thin pr-10 cursor-pointer' onClick={limitNeg}>-</p>
                <p>{limit}</p>
                <p className='text-3xl border-black border-l font-thin pl-10 cursor-pointer' onClick={() => setLimit(limit + 1)}>+</p>
            </div>
        </div>
    )
}

export default Quantity