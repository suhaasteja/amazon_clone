import React from 'react';
import './Cards.css';

const cardsContent = [
    {
        index: 0,
        title: 'Keep shopping for',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
    {
        index: 1,
        title: 'Pick up where you left off',
        items : [
           {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
    {
        index: 2,
        title: 'Buy Again',
        items : [
           {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
    {
        index: 3,
        title: 'Shop by Category',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
    {
        index: 4,
        title: 'Today’s Deals',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
    {
        index: 5,
        title: 'For you',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            
        ]
    },
    {
        index: 6,
        title: 'More items to explore',
        items :[
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            
        ]
    },
    {
        index: 7,
        title: 'You might also like',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            
        ]
    },
    {
        index: 8,
        title: 'Review your purchase',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            
        ]
    },
    {
        index: 9,
        title: 'Up to 60% off ',
        items : [
            {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
    {
        index: 10,
        title: 'Pick up where you left off',
        items : [
           {
                imgURL : 'https://m.media-amazon.com/images/I/71an9eiBxpL._AC_SY270_.jpg',
                caption: 'macbook'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/81MF389-9gS._AC_SY270_.jpg',
                caption: 'ipad'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/315vs3rLEZL._AC_SY400_.jpg',
                caption: 'iphone'
            },
            {
                imgURL : 'https://m.media-amazon.com/images/I/71+FrNJ61dL._AC_UY436_FMwebp_QL65_.jpg',
                caption: 'iwatch'
            },
        ]
    },
]

export const Cards = () => {
  return (
    <div className='cards-container'>
        {
            cardsContent.map((card, index) => {
                const {title, items} = card;
                if(items.length > 4){
                    return (
                        <div className="card card-full-width" key={index}>
                            <h4>{title}</h4>
                            <div className={`card-items card-items-full-width`}>
                                {
                                    items.map(item => {
                                        const {imgURL, caption} = item;
                                        return (
                                            <div key={`caption${Math.random()*100}`} className={`card-item card-item-full-width`}>
                                                <figure>
                                                    <img src={imgURL} alt={caption} />
                                                    <figcaption>{caption}</figcaption>
                                                </figure>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
                return (
                        <div key={index} className={`card`} >
                            <h4>{title}</h4>
                            <div className={`card-items`}>
                                {
                                    items.map(item => {
                                        const {imgURL, caption} = item;
                                        return (
                                            <div key={`imgURL${Math.random()*100}`} className={`card-item`}>
                                                <img src={imgURL} alt={caption} />
                                                <p>{caption}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                )
            })
        }
    </div>
  )
}
