import React from 'react';
import { Button } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()


    return (
        <div className="mt-5">
            <Button onClick={signInWithGoogle}>Google Sign in</Button>


        </div>
    );
};

export default Login;