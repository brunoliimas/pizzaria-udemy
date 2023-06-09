import axios, { AxiosError } from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/AuthTokenError";
import { signOut } from "@/contexts/AuthContext";

export function setupAPIClient(ctx = undefined) {
    let cookies = parseCookies(ctx);

    const api = axios.create({
        baseURL: 'http://localhost:3333/',
        headers: {
            Authorization: `Bearer ${cookies['@nextauth.token']}`
        }
    });

    api.interceptors.response.use(response => {
        return response;
    }, (error: AxiosError) => {
        if (error.response?.status === 401) { // Verifica se 'error.response' está definido antes de acessá-lo
            if (typeof window !== 'undefined') {
                // redireciona para a página de login
                signOut();
            }
        } else {
            return Promise.reject(new AuthTokenError());
        }

        return Promise.reject(error);
    });

    return api;
}
