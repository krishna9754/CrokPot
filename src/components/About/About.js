import React from 'react'
import SignUp from '../home/AUTH/Signup'
import YearStart from './YearStart'

function About() {
    return (
        <div>
            <div className='text-center w-full my-10'>
                <h1 className='text-3xl font-serif'>ABOUT CROKPOT</h1>
                <p className='text-gray-500 text-center my-3'>CrokPot's handmade ceramic products have been around since 1650 let's explore our jurney</p>
            </div>
            <YearStart />
            <SignUp />
        </div>
    )
}

export default About