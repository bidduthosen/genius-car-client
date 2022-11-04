import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const AboutUs = () => {
    return (
        <div className="hero my-16">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className=" shadow-2xl w-5/6 h-full" />
                    <img src={parts} alt='' className="rounded-lg shadow-2xl w-4/6 absolute top-2/4 right-6 border-8 border-white" />
                </div>
                <div className='w-1/2 mt-20 lg:mt-0'>
                    <h6 className='text-orange-600 font-bold text-2xl pb-4'>About Us</h6>
                    <h1 className="text-5xl font-bold text-black">
                        We are qualified <br />
                        & of experience <br />
                        in this field 
                    </h1>
                    <p className="py-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-outline btn-secondary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;