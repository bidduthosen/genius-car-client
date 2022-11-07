import React, { useEffect, useState } from 'react';

const OrdersRow = ({order, handleDelete, handleStatusUpdate}) => {
    const {_id, ServiceId, ServicesName , price, Customer, phone, email, message, status}= order;
    const [orderService, setOrderService] = useState({});

    useEffect(()=>{
        fetch(`https://genius-car-server-lake-gamma.vercel.app/services/${ServiceId}`)
            .then(res=> res.json())
            .then(data => setOrderService(data))
    },[ServiceId]);
    
    
    return (
        <tr className='py-2'>
                <th>    
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="rounded mr-4 w-24 h-24">
                        <img src={orderService?.img} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{ServicesName}</div>
                    <div className="text-sm opacity-50">Price: ${price}</div>
                    </div>
                </div>
                </td>
                <td>
                Customer: {Customer}
                <br/>
                <span className="badge badge-ghost badge-sm">Phone: {phone}</span>
                </td>
                <td>
                    {email}
                    <br />
                    <span className="badge badge-ghost badge-sm">{message}</span>
                </td>
                <th onClick={()=>handleStatusUpdate(_id)}>
                    {
                        status ? 
                        <button className="btn btn-success">{status}</button>
                        : 
                        <button className="btn btn-secondary">Pending...</button>
                    }
                    
                </th>
            </tr>
    );
};

export default OrdersRow;