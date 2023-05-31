import React, { useEffect, useState, useContext, createContext, ReactNode } from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";



type AuthContextData = {
    user: UserProps
    isAuthenticated: boolean;
    signIn: (credencials: SignInProps) => Promise<void>;
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}
type UserProps = {
    id: string;
    name: string;
    email: string;
    token: string;
}

type AuthProviderProps = {
    children: ReactNode;
}
type SignInProps = {
    email: string;
    password: string;

}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserProps>({
        id: '',
        name: '',
        email: '',
        token: '',
    })

    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true)

    const isAuthenticated = !!user.name


    useEffect(() => {
        async function getUser() {
            // Pegar os dados salvos do User
            const userInfo = await AsyncStorage.getItem('@pizzariacomanda');
            let hasUser: UserProps = JSON.parse(userInfo || '{}')


            // Verificar se recebemos as infos do user

            if (Object.keys(hasUser).length > 0) {
                api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`;
                setUser({
                    id: hasUser.id,
                    name: hasUser.name,
                    email: hasUser.email,
                    token: hasUser.token,
                })
            }
            setLoading(false)
        }
        getUser();
    }, [])


    async function signIn({ email, password }: SignInProps) {
        setLoadingAuth(true);

        try {
            const response = await api.post('/session', {
                email,
                password
            })
            // console.log(response.data);

            const { id, name, token } = response.data;

            const data = {
                ...response.data
            }

            await AsyncStorage.setItem('@pizzariacomanda', JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setUser({
                id,
                name,
                email,
                token,
            })

            setLoadingAuth(false)


        } catch (error) {
            console.log('erro ao acessar', error);
            setLoadingAuth(false);
        }
    }


    async function signOut() {
        await AsyncStorage.clear()
            .then(() => {
                setUser({
                    id: '',
                    email: '',
                    name: '',
                    token: '',
                })
            })
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated,
                signIn,
                loading,
                loadingAuth,
                signOut,
            }}>
            {children}
        </AuthContext.Provider>
    )
}