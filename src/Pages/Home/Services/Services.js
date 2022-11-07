import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [Services, setServices] = useState([]);
    useEffect(()=>{
        fetch('https://genius-car-server-lake-gamma.vercel.app/services')
            .then(res=> res.json())
            .then(data=> setServices(data))
    },[])
    return (
        <div className='my-40'>
            <div className='text-center'>
                <h5 className='text-orange-600 font-bold text-2xl'>Service</h5>
                <h1 className="font-bold text-5xl text-black my-5">Our Service Area</h1>
                <p className="font-lg text-black w-3/5 mx-auto tracking-wider">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12'>
                {
                    Services.map(service=> <ServicesCart
                        key={service._id}
                        service={service}
                    ></ServicesCart>)
                }
            </div>
            <div className='text-center my-16'>
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>
        </div>
    );
};

export default Services;