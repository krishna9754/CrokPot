import React from 'react'
import Hero from '../home/heroSection/Hero';
import ImageCard from './imageCard/ImageCard';
import Offer from './otherSection/Offer';
import BestSeller from './bestSeller/BestSeller';
import OurHistory from './otherSection/OurHistory';
import NewArrival from './newArival/NewArrival';
import OurBlog from './otherSection/OurBlog';
import Signup from './AUTH/Signup';

function Home() {
    return (
        <div>
            <Hero />
            <ImageCard />
            <Offer />
            <BestSeller />
            <OurHistory />
            <NewArrival />
            <OurBlog />
            <Signup />
        </div>
    )
}

export default Home