import Cookies from "js-cookie";
import { useContext, createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom"; // Assuming you are using React Router

export const AuthContext = createContext({
    user: null,
    isLoading: true
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const auth_result = Cookies.get("jwt_authorization");
            if (auth_result) {
                setUser(auth_result);
                console.log("User authenticated");
            } else {
                setUser(null);
                console.log("User not authenticated");
            }
            setIsLoading(false);
        }

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ user, isLoading, setUser, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const PrivateRoute = ({ children }) => {
    const auth = useContext(AuthContext);

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (!auth.user) {
        return <Navigate to="/" />;
    }

    console.log(auth.user + " is authenticated");

    return children;
}