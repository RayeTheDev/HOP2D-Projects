import { createContext, useContext, useState, useEffect } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState()
    useEffect(() => {
        const data = window.localStorage.getItem("APP_USER");
        const parsedData = JSON.parse(data);
        if(data !== null) setCurrentUser(parsedData);
    
      }, []);

    const value = {
        currentUser,
        setCurrentUser
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}