import { useState, FormEvent } from 'react'

import Header from "@/components/Header"
import Head from "next/head"

export default function Category() {
    const [name, setName] = useState('');

    async function handleRegister(event: FormEvent) {
        event.preventDefault();
        alert("categoria " + name)
    }


    return (
        <>
            <Head>
                <title>Pizzaria Comanda - Nova Categoria</title>
            </Head>
            <Header />
            <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-16">
                <h1 className="text-white text-4xl font-bold mb-10 text-center">Cadastrar novas categorias</h1>

                <form onSubmit={handleRegister} className="flex flex-col w-full md:w-1/2 max-w-[600px]">
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full mb-4 h-10 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50" />
                    <button
                        type="submit"
                        className="w-full bg-green-900 rounded-md hover:brightness-150 py-2 px-8 transition-all duration-200 ease-in flex justify-center">
                        <a className="text-white font-semibold">
                            Cadastrar
                        </a>
                    </button>
                </form>
            </main>
        </>
    )
}