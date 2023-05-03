import { createContext, ReactNode, useState } from "react";
import { api } from '../services/apiClient'

import { destroyCookie, setCookie, parseCookies } from 'nookies';
import Router from "next/router";


type AuthContextData = {
    user: UserProps;
    isAuthenticated: boolean;
    signIn: (credentials: SignInProps) => Promise<void>;
    signOut: () => void;
    signUp: (credentials: SignUpProps) => Promise<void>;
}
type UserProps = {
    id: string;
    name: string;
    email: string;
}
type SignInProps = {
    email: string;
    password: string;
}
type SignUpProps = {
    name: string;
    email: string;
    password: string;
}

type AuthProviderProps = {
    children: ReactNode;
}



export const AuthContext = createContext({} as AuthContextData)


export function signOut() {
    try {
        destroyCookie(undefined, '@nextauth.token')
        Router.push('/')
    } catch (error) {
        console.log('Error ao deslogar');

    }
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UserProps>({ id: '', name: '', email: '' });
    const isAuthenticated = !!user;

    async function signIn({ email, password }: SignInProps) {
        try {
            const response = await api.post('/session', {
                email,
                password
            });
            // console.log(response.data);

            const { id, name, token } = response.data

            setCookie(undefined, '@nextauth.token', token, {
                maxAge: 60 * 60 * 24 * 30,
                path: "/"
            });
            setUser({
                id,
                name,
                email
            });
            // Passar para proximas req o nosso token
            api.defaults.headers['Authorization'] = `Bearer ${token}`
            // Redirecionar para aba dashboard
            Router.push("/dashboard");

        } catch (error) {
            console.log("Erro ao acessar ", error);
        }
    }


    async function signUp({ name, email, password }: SignUpProps) {
        try {
            const response = await api.post('/users', {
                name,
                email,
                password
            });

            console.log("Cadastro realizado com sucesso");

            Router.push('/');

        } catch (error) {
            console.log("Erro ao cadastrar ", error);
        }

    }


    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
            {children}
        </AuthContext.Provider>
    )
}