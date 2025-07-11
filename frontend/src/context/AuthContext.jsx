import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const tokenFromURL = new URLSearchParams(window.location.search).get('token');
        const storedToken = localStorage.getItem("token");

        let finalToken = tokenFromURL || storedToken;

        if(finalToken){
            try {
                const decoded = jwtDecode(finalToken)
                localStorage.setItem("token", finalToken);
                setUser({ ...decoded, token:finalToken});
                // Clean token from URL so it doesn't re-apply on refresh
                if(tokenFromURL){
                    window.history.replaceState({},document.title, window.location.pathname);
                }
            } catch (error) {
                console.error("Error decoding token:", error);
                localStorage.removeItem("token");
                setUser(null);
            }
        }
        setLoading(false);
    }, []);
    if (loading) return <div className="text-white p-10">Loading...</div>;

    return(
        <AuthContext.Provider value={{ user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
   
}