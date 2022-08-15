import React, { useEffect, useState } from 'react';
import './Slides.css';

const slidesContent = [
    {
        index: 0,
        imgURL: 'https://images-eu.ssl-images-amazon.com/images/G/31/img22/Events/GW/ID22/en_2x._CB629411468_.jpg'
    },
    {
        index: 1,
        imgURL: 'https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg'
    },
    {
        index: 2,
        imgURL: 'https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg'
    },
    {
        index: 3,
        imgURL: 'https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg'
    },
]

export const Slides = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleToggleRight();
        }, 5000);

        return () => clearInterval(interval);
    }, [slideIndex]);

    const handleToggleLeft = () => {
        setSlideIndex(prev => {
            if(prev <= 0){
                return slidesContent.length-1;
            }
            return prev-1;
        });
    };

    const handleToggleRight = () => {
        setSlideIndex(prev => {
            if(prev >= slidesContent.length-1){
                return 0;
            }
            return prev+1
        });
    };

    return (
        <div className='slides-container'>
            <div className='slide-toggle-btn'>
                <button onClick={handleToggleLeft}>{'<'}</button>
            </div>
            <div className='slide'>
                <img src={slidesContent[slideIndex].imgURL} alt={`slide ${slideIndex}`} />
            </div>
            <div className='slide-toggle-btn'>
                <button id="right-toggle-btn" onClick={handleToggleRight}>{'>'}</button>
            </div>
        </div>
    )
}
