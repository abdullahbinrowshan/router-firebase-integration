import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react"
import { auth } from "../../../firebase.init";

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user)
            console.log(user);
        })
    }

    return {
        user, 
        signInWithGoogle
    } 
}

export default useFirebase;