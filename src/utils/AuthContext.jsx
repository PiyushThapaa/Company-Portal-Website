import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { doc } from "firebase/firestore";

export const AuthContext = createContext();

const AuthProvider  = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    //To re-render the auth change function everytime user logout or login
    const [authChanged, setAuthChanged] = useState(false)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, async (currentUser)=> {
            setUser(currentUser)
            if (!currentUser) {
                setLoading(false)
            }
            
        })
        return () => unsubscribe()
    },[authChanged])
    return(
        <AuthContext.Provider value={{loading, user, setAuthChanged, setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;