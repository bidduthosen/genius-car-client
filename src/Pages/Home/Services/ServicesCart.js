import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCart = ({service}) => {
    const {_id, img, price, title} = service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5 w-100">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                <div className="card-actions ">
                    <p className='font-semibold text-orange-600 text-xl'>Price: ${price}</p>
                    <Link to={`/services/${_id}`}><h4 className='font-semibold text-orange-600 text-xl'><button className="btn btn-outline btn-secondary btn-sm">Checkout</button></h4></Link>
                </div>
            </div>
        </div>
    );
};

export default ServicesCart;