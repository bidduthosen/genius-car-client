import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import checkout from '../../assets/images/checkout/checkout.png';
import toast from 'react-hot-toast';

const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const services = useLoaderData();
    const {_id, title, price} = services ;

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const phone = form.phone.value;
        const email = user?.email || 'Unregistered';
        const message = form.message.value;

        const orders ={
            ServiceId : _id,
            ServicesName: title,
            price,
            Customer: name,
            phone,
            email,
            message,
        }
        fetch('https://genius-car-server-lake-gamma.vercel.app/orders',{
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orders)
        })
            .then(res=> res.json())
            .then(data=> {
                console.log(data);
                if(data.acknowledged){
                    toast.success("Checkout Success");
                    form.reset()
                }
            })
            .catch(er => console.log(er))
    }

    return (
        <div className='my-8'>
            <div className='w-9/12 mx-auto relative carousel-img z-0 mb-4'>
                <img src={checkout} alt="" />
                <h3 className="text-3xl m-4 absolute flex justify-start transform -translate-y-1/2 w-4/5 left-4 top-1/4 text-white z-10	">You are about or Order: {title}</h3>
                <h3 className="text-2xl m-4 absolute flex justify-start transform -translate-y-1/2 w-2/5 left-4 top-2/4 text-orange-600 z-10">Price: ${price}</h3>
            </div>
            <form onSubmit={handleSubmit} className='w-9/12 mx-auto'>
                <h3 className="text-3xl text-black text-center my-5 font-bold">Check out Products</h3>
                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered input-primary m-3 w-full" required/>
                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered input-primary w-full m-3" required/>
                <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered input-primary w-full  m-3" required/>
                <input type="text" name='email' readOnly defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-primary w-full  m-3 "/>
                <textarea name='message' className="textarea textarea-primary h-24 w-full m-3" placeholder="Your Message" required></textarea>
                <button type='submit' className="btn btn-outline btn-secondary flex mx-auto my-8">Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;