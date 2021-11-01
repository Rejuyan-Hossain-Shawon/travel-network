import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://grim-shadow-91675.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    // delete btn 
    const handleDeleteButton = (id) => {
        fetch(`https://grim-shadow-91675.herokuapp.com/order/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                alert("Order Deleted Successfully");
                const remainingOrders = allOrders.filter(order => order._id !== id);
                setAllOrders(remainingOrders);
            })
    }
    return (
        <div>
            <h1>Manage all orders</h1>
            {
                allOrders.map(order => <li className="m-2" key={order._id}>{user.email} {order.orderId} <Button onClick={() => handleDeleteButton(order._id)} variant="danger">X</Button></li>)
            }
        </div>
    );
};

export default AllOrders;