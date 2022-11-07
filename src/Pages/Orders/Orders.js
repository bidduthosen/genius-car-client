import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrdersRow from './OrdersRow';

const Orders = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log('user', user.email)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`,{
            headers: {
                authorization : `bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut();
                }
                return res.json()
            })
            .then(data => {
                // console.log('current dta', data)
                setOrders(data)
            })

    }, [user?.email, logOut]);
    
    const handleDelete = (id) =>{
        const proceed = window.confirm('are you remove the products')
        if(proceed){
            fetch(`http://localhost:5000/orders/${id}`,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0 ){
                    toast.success('remove done')
                    const remaining = orders.filter(ord => ord._id !== id)
                    setOrders(remaining);
                }
            })
        }
    }
    // update data pending of approved
    const handleStatusUpdate = id =>{
        fetch(`http://localhost:5000/orders/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({status: 'approved'})
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                const remaining = orders.filter(odr => odr._id !== id);
                const approving = orders.find(odr => odr._id !== id);
                approving.status = 'Approved';

                const newOrders = [approving, ...remaining];
                setOrders(newOrders);
            }
        })
    }

    return (
        <div className="overflow-x-auto my-6 w-full">
            <table className="table w-full">

                <tbody>
                {
                    orders.map(order=> <OrdersRow
                        key={order._id}
                        order={order}
                        handleDelete={handleDelete}
                        handleStatusUpdate={handleStatusUpdate}
                    ></OrdersRow>)
                }
                </tbody>
               
                
            </table>
        </div>
    );
};

export default Orders;