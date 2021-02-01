import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as auth from '../service/auth';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

// interface AuthProviderHeader {
//     children: React.FC
// }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const { Provider } = AuthContext;

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
                const storageUser = await AsyncStorage.getItem('@Auth:user');
                const storageToken = await AsyncStorage.getItem('@Auth:token');

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }

        loadStorageData();
    })

    async function signIn() {
        const response = await auth.signIn()
        setUser(response.user);

        AsyncStorage.setItem('@Auth:user', JSON.stringify(response.user));
        AsyncStorage.setItem('@Auth:token', response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }

    return (
        <Provider value={{ signed: !!user, user, loading, signIn, signOut }}>
            { children}
        </Provider>
    );
}

export default AuthContext;