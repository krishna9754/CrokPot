import React from 'react'
import Input from './input/Input'
import SignUp from '../button/SignUpBtn'

function Signup() {
    return (
        <div className='w-full text-center my-10'>
            <p>Subscribe for emails</p>
            <p className='text-2xl font-serif my-4'>FOR NEWS, COLLECTION & MORE</p>
            <Input />
            <a href=''><SignUp /></a>
        </div>
    )
}

export default Signup