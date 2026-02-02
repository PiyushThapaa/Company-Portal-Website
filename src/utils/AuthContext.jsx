import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext();

const AuthProvider  = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            setLoading(false)
            
        })
        return () => unsubscribe()
    },[])
    return(
        <AuthContext.Provider value={{loading, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;