import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");

        if (token) {
            setUser({
                token,
                role,
                name,
                email
            });
        }
    }, []);

    const login = (data) => {

        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("role", data.role);
        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);

        setUser({
            token: data.accessToken,
            role: data.role,
            name: data.name,
            email: data.email
        });
    };

    const logout = () => {

        localStorage.clear();
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);