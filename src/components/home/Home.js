import React from 'react'
import Navbar from './otherSection/Navbar';
import Hero from '../home/heroSection/Hero';
import ImageCard from './imageCard/ImageCard';
import Offer from './otherSection/Offer';
import BestSeller from './bestSeller/BestSeller';
import OurHistory from './otherSection/OurHistory';
import NewArrival from './newArival/NewArrival';
import OurBlog from './otherSection/OurBlog';
import Signup from './AUTH/Signup';
import Fotter from './fotter/Fotter';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <ImageCard />
            <Offer />
            <BestSeller />
            <OurHistory />
            <NewArrival />
            <OurBlog />
            <Signup />
            <Fotter />
        </div>
    )
}

export default Home