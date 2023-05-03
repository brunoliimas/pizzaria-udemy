import Head from "next/head"
import Link from "next/link"


import { Logo } from "@/components/ui/Logo"

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>CiaoPizzaria - Início</title>
            </Head>
            <main className="h-screen flex flex-col items-center justify-center px-10 py-5">
                <Logo />
                <h1 className="mb-4 text-2xl font-bold text-white">Bem vindo</h1>
                
            </main>
        </>
    )
}
