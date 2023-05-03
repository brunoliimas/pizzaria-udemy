import { FormEvent, useContext, useState } from "react"
import { toast } from "react-toastify"

import Head from "next/head"
import Link from "next/link"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"

import { AuthContext } from "@/contexts/AuthContext"


export default function Home() {

    const { signIn } = useContext(AuthContext)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        if(email === '' || password === ''){
            toast.warning("Preencha seus dados!")
            return;
        }

        setLoading(true);

        let data = {
            email,
            password
        }
        await signIn(data)

        setLoading(false);

    }
    return (
        <>
            <Head>
                <title>CiaoPizzaria - Entre na sua conta</title>
            </Head>
            <main className="h-screen flex flex-col items-center justify-center px-10 py-5">
                <Logo />
                <h1 className="mb-4 text-2xl font-bold text-white">Entrar</h1>
                <div className="w-full max-w-xs">
                    <form onSubmit={handleLogin} className="flex flex-col items-center justify-center">
                        <Input
                            type="text"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                        <Button
                            type="submit"
                            loading={loading}>
                            Entrar
                        </Button>

                        <Link className="text-white mt-4 cursor-pointer" href="/signup">
                            Não tem uma conta? <span className="underline">Cadastrar</span>
                        </Link>
                    </form>
                </div>
            </main>
        </>
    )
}
