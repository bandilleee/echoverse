import { createContext, useContext, useEffect, useState } from "react" // Add useContext
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [input, setInput] = useState("")
    
    const fetchBlogs = async () => {
        try {
            const { data } = await axios.get('/api/blog/all'); // Fixed: added const { data }
            data.success ? setBlogs(data.blogs) : toast.error(data.message)
        } catch (error){
            toast.error(error.message)
        }
    }
    
    useEffect(() => {
        fetchBlogs();
        const token = localStorage.getItem('token') // Fixed: added .getItem()
        if(token){
            setToken(token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Added 'Bearer '
        }
    }, [])
    
    const value = {
        axios, navigate, token, setToken, blogs, setBlogs, input, setInput, fetchBlogs
    }
   
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext); // Fixed: use useContext instead of recursive call
};