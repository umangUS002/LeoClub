import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [admin, setAdmin] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const value = {
        admin, setAdmin, showLogin, setShowLogin
    }

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
}

export const useAppContext = () => {
    return useContext(AppContext)
}