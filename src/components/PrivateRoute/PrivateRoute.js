import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
        </div>
    }
    return (
        <div>
            <Route

                {...rest}
                render={({ location }) => Object.keys(user).length !== 0 ? children :
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    ></Redirect>}
            >

            </Route>
        </div>
    );
};

export default PrivateRoute;