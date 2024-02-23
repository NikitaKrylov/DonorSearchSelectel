import { useContext, createContext,  useEffect, useState, Navigate} from "react";

export const AuthContext = createContext({
    user: null,
    isLoading: true
});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const auth_result = localStorage.getItem('authorized') ? JSON.parse(localStorage.getItem('authorized')) : {
        authorized: false
    }
    set
    console.log(auth_result)
    useEffect(() => {
        const checkAuth = async () => {
            if (isLoading) {
                if (auth_result) {
                    setIsLoading(false);
                }
                
                else {
                    setIsLoading(false);
                    setUser(null);
                }
                // если нет
               
            }
        }

        checkAuth();
    }, [isLoading]);

    return (
        <AuthContext.Provider value={{ user, isLoading, setUser, setIsLoading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const PrivateRoute = ({children}) => {
    const auth = useContext(AuthContext);

    if (auth.isLoading) {
        return <div>Загрузка</div>
    }

    if (!auth.user) {
        return <Navigate to="/home" />
    }
    
    return children;
}
