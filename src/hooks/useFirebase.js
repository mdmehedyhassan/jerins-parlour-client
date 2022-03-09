import initializeFirebase from "../Pages/Login/Login/Firebase/firebase.init"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

// initialize Firebase;
initializeFirebase();


export const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    const auth = getAuth();

    const googleSignInHandler = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
            }).catch((error) => {
            });
    };
    const createUserWithEmailHandler = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                updateUser(name)
            })
            .catch((error) => {
            });
    };

    const signUserWithEmailHandler = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
            })
            .catch((error) => {
            });
    };

    const signOutHandler = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
        });

    }

    const updateUser = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        }).catch((error) => {
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [auth]);


    return {
        user,
        googleSignInHandler,
        isDarkTheme,
        setIsDarkTheme,
        createUserWithEmailHandler,
        signUserWithEmailHandler,
        signOutHandler
    }
}