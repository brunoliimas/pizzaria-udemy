import Head from "next/head"

import { canSSRAuth } from '@/utils/canSSRAuth';
import Header from "@/components/Header";

export default function Product() {
    return (
        <>
            <Head>
                <title>Pizzaria Comanda - Nova Categoria</title>
            </Head>
            <Header />
            <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-16">
                <h1 className="text-white text-4xl font-bold mb-10 text-center">Cadastrar novo produto</h1>

                <form className="flex flex-col w-full md:w-1/2 max-w-[600px]">

                    <select className="w-full mb-4 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50" >
                        <option>Bebidas</option>
                        <option>Pizza Salgada</option>
                        <option>Pizza Doce</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Digite o nome do produto"
                        className="w-full mb-4 h-10 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50" />
                    <input
                        type="text"
                        placeholder="Digite o preço do produto"
                        className="w-full mb-4 h-10 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50" />

                    <textarea
                        className="w-full mb-4 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50 resize-none"
                        placeholder="Descreva seu produto..."></textarea>

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
export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})