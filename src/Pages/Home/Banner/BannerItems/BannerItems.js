import React from 'react';
import './BannerItems.css';
const BannerItems = ({slide}) => {
    const {image, id , prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full my-12">
            <div className='carousel-img '>
                <img src={image} alt='' className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a> 
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-28 top-1/4">
                <h1 className='text-6xl text-white pl-4'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-32 top-2/4">
                <p className='text-white text-xl'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-32 top-3/4">
                <button className="btn btn-secondary mr-3">Discover More</button>
                <button className="btn btn-outline btn-secondary">Latest Project</button>
            </div>
        </div>
    );
};

export default BannerItems;