import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const authContext = createContext()

const auth = getAuth(app)

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Sajib' })
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    /////////////////////////////////
    // useEffect(() => {
    //     onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser)
    //         console.log('auth state changed', currentUser)
    //     })
    // }, [])
    /////////////////////////////////////

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('auth state changed', currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo = { user, createUser, loginUser, logOut, googleLogIn }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default UserContext;