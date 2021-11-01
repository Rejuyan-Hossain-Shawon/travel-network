import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInWithGoogle } = useAuth()


    return (
        <div className="m-5 p-5">
            <Button onClick={signInWithGoogle}>Google Sign in</Button>


        </div>
    );
};

export default Login;