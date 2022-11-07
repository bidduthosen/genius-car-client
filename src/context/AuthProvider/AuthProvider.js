import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebas/firebase.init';
import { current } from 'daisyui/src/colors';


const auth  = getAuth(app);

export const AuthContext = createContext();  

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const createUser = (email, password) =>{
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) =>{
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
        localStorage.removeItem('genius-token')
        return signOut(auth);
    };

    const signInGoogle = (provider) =>{
        setLoader(true);
        return signInWithPopup(auth, provider);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('state change', currentUser);
            setUser(currentUser);
            setLoader(false);
        });
        return ()=> unSubscribe();
    }, []);


    const authInfo = {
        user,
        loader,
        createUser,
        loginUser,
        logOut,
        signInGoogle,
    }
    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;