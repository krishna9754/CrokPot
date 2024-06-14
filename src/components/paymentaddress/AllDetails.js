import React from 'react'
import Address from './Address'
import Payment from './Payment'

function AllDetails() {
  return (
    <div className='flex justify-center space-x-14 w-full'>
        <Address />
        <Payment />
    </div>
  )
}

export default AllDetails