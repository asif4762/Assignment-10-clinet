import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import Swal from 'sweetalert2';


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const gitHubLogin = () =>{
        return signInWithPopup(auth, gitHubProvider)
        .then(() => {
            Swal.fire({
                title: "Logged In Successfully",
                icon: "success"
            });
        })
        .catch((error) => {
            Swal.fire({
                title: "Google Login Error",
                text: error.message,
                icon: "error"
            });
        });
    }

    const googleLogin = () => {
        console.log('google login')
        return signInWithPopup(auth, googleProvider)
            .then(() => {
                Swal.fire({
                    title: "Logged In Successfully",
                    icon: "success"
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Google Login Error",
                    text: error.message,
                    icon: "error"
                });
            });
    };

    const signOutUser = () => {
        signOut(auth)
            .then(() => {
                Swal.fire({
                    title: "You Successfully Logged Out",
                    icon: "success"
                });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const authContextValue = {
        user,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,
        gitHubLogin
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
