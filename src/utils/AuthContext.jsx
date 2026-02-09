import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase";

export const AuthContext = createContext();

const AuthProvider  = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    //To re-render the auth change function everytime user logout
    const [authChanged, setAuthChanged] = useState(false)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
            
        })
        return () => unsubscribe()
    },[authChanged])
    return(
        <AuthContext.Provider value={{loading, user, setAuthChanged}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;