import { useEffect, useState } from "react";
import { signOut, getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

// provider
const googleProvider = new GoogleAuthProvider();


initializeAuthentication()
const useFirebase = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const auth = getAuth();





    // sign with google
    const signInWithGoogle = () => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {


                setUser(result.user);


            })
            .catch((error) => {

                setError(error.message);


            })
            .finally(() => setIsLoading(false))


    }


    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                alert('Log Out SuccessFully');
                setUser({});
            })
            .catch((error) => {
                alert(error.message);
                setError("");
            })
            .finally(() => setIsLoading(false))

    }

    // firebase observer
    useEffect(() => {
        setIsLoading(true);

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;


    }, [])

    // 
    return {
        user,
        isLoading,
        error,
        setUser,
        setError,
        signInWithGoogle,
        logOut,
        setIsLoading
    }
}

export default useFirebase;