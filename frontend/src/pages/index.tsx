import { FormEvent, useContext } from "react"

import Head from "next/head"
import Link from "next/link"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"

import { AuthContext } from "@/contexts/AuthContext"


export default function Home() {

    const { signIn } = useContext(AuthContext)

    async function handleLogin(event: FormEvent) {
        event.preventDefault();

        let data = {
            email: "teste@gmail.com",
            password: "123456"
        }
        await signIn(data)
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
                        <Input type="text" placeholder="Digite seu e-mail" />
                        <Input type="password" placeholder="Digite sua senha" />
                        <Button
                            type="submit"
                            loading={false}
                        >
                            Entrar
                        </Button>

                        <Link className="text-white mt-4 cursor-pointer" href="/cadastrar">
                            Não tem uma conta? <span className="underline">Cadastrar</span>
                        </Link>
                    </form>
                </div>
            </main>
        </>
    )
}
