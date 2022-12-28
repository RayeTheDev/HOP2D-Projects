import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "../../config/firebase"


const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    // const [isLogIn, setIsLogIn] = useState(false)
    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)

    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        // isLogIn,
        // setIsLogIn,
        signup
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}