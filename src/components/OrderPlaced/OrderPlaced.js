import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';

const OrderPlaced = () => {

    const { id } = useParams();

    const history = useHistory();

    // user details 

    const { user, isLoading } = useFirebase();



    const orderData = {
        name: user.displayName,
        email: user.email,
        status: false,
        orderId: id
    }

    useEffect(() => {
        if (isLoading) {
            return <Spinner animation="border" />
        }
        fetch('http://localhost:5000/program/order', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Your order placed Successfully");
                    history.push("/home");
                }
            })
    }, [user])















    return (
        <div>
            <h2>Oreder Placed for {id}</h2>


        </div>
    );
};

export default OrderPlaced;