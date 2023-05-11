import Head from "next/head"

import { Logo } from "@/components/ui/Logo"
import { canSSRAuth } from "@/utils/canSSRAuth"
import Header from "@/components/Header"

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>CiaoPizzaria - Início</title>
            </Head>
            <Header />
            <main className="h-screen flex flex-col items-center justify-center px-10 py-5">
                <div className="mb-4">
                    <Logo />
                </div>
                <h1 className="mb-4 text-2xl font-bold text-white">Bem vindo</h1>

            </main>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})