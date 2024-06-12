import React from 'react';
import './imageCard.css'; // Assuming you have custom styles
import Image1 from '../image/image1.png';

const data = [
    {
        "name": "TABLEWARE",
        "image": "https://media.houseandgarden.co.uk/photos/64c2559d54c3ba022255a25e/master/w_1600,c_limit/Olympia-Ariadne-Irving-HG-028.jpg"
    },
    {
        "name": "HOME DECORE",
        "image": "https://i.etsystatic.com/41141080/r/il/655645/5286551752/il_600x600.5286551752_t623.jpg"
    },
    {
        "name": "HOLIDAY",
        "image": "https://hips.hearstapps.com/hmg-prod/images/thankgiving-dinner-plates-64c01600c6d73.jpg?crop=0.425xw:0.850xh;0.0472xw,0.0749xh&resize=640:*"
    },
    {
        "name": "COLLECTION",
        "image": "https://rambleroamco.com/cdn/shop/files/retrogreenjapanesedinnerwareset20pieces.webp?v=1708096986&width=1100"
    }
];

function ImageCard() {
    return (
        <div className='my-20 w-full flex flex-wrap justify-center items-center'>
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className="card m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="card-img">
                                <img className='h-72 w-full object-cover' src={item.image} alt={item.name} />
                            </div>
                            <div className="card-info text-center mt-4">
                                <p className="title text-lg font-semibold">{item.name}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ImageCard;
