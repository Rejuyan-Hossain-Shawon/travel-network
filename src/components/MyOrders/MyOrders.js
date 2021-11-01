import React, { useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const MyOrders = () => {
    const { user, isLoading } = useFirebase();

    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        if (Object.keys(user).length === 0) {
            return <h1>wait</h1>
        }
        fetch(`http://localhost:5000/myorders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))


    }, [user])

    console.log(myOrders);


    // delete onlclick
    const handleDeleteButton = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/order/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Order Deleted Successfully");
                    const remainingOrders = myOrders.filter(order => order._id !== id);
                    setMyOrders(remainingOrders);
                }
            })

    }



    return (
        <>
            <h2>{user.displayName} Order List</h2>
            <ul>
                {myOrders.map(order => <li className="m-2" key={order._id}>{user.email} {order.orderId} <Button onClick={() => handleDeleteButton(order._id)} variant="danger">X</Button></li>)}
            </ul>
        </>
    );
};

export default MyOrders;