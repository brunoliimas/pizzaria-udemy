import Head from "next/head"
import Link from "next/link"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Logo } from "@/components/ui/Logo"

export default function Home() {
    return (
        <>
            <Head>
                <title>CiaoPizzaria - Entre na sua conta</title>
            </Head>
            <main className="h-screen flex flex-col items-center justify-center px-10 py-5">
                <Logo />
                <h1 className="mb-4 text-2xl font-bold text-white">Entrar</h1>
                <div className="w-full max-w-xs">
                    <form className="flex flex-col items-center justify-center">
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
