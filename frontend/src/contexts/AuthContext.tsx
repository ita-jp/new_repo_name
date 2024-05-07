import React, {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {userService} from "../api/userService";

interface AuthContextType {
    username: string | null;
    loading: boolean;
    login: (username: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({children}: { children: ReactNode }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            userService.me().then(data => {
                if (data && data.username) {
                    setUsername(data.username);
                }
            }).catch(() => {
                setUsername(null);
            }).finally(() => {
                setLoading(false);
            });

        }
        fetchUser();
    }, []);

    const login = (username: string) => {
        setUsername(username);
    };
    const logout = () => {
        setUsername(null);
    };

    const value = {username, loading, login, logout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export {AuthProvider, useAuth};