import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [token, setToken] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const [events, setEvents] = useState([])
    const [allContent, setAllContent] = useState([])

    const fetchEvents = async() => {
        try {
            const {data} = await axios.get('/api/event/all-events');
            data.success ? setEvents(data.events) : toast.error(data.message)

        } catch (error) {
            toast.error(error.message);
        }
    }

    const fetchContent = async() => {
        try {
            const {data} = await axios.get('/api/content/all-content');
            data.success ? setAllContent(data.content) : toast.error(data.message)

        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        fetchEvents()
        fetchContent()
    },[])

    const value = {
        token, setToken, showLogin, setShowLogin, axios, toast, events, allContent
    }

    return (<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>)
}

export const useAppContext = () => {
    return useContext(AppContext)
}