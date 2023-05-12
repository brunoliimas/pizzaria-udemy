import Head from "next/head"

import { Logo } from "@/components/ui/Logo"
import { canSSRAuth } from "@/utils/canSSRAuth"
import Header from "@/components/Header"
import { FiRefreshCcw } from 'react-icons/fi'

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Pizzaria Comanda - Início</title>
            </Head>
            <Header />
            <main className="container mx-auto h-screen px-10 py-5">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold text-white">Últimos Pedidos</h1>
                    <button>
                        <FiRefreshCcw size={25} color="#22b573" />
                    </button>
                </div>
                <article className="flex flex-col my-4">
                    <section className="flex bg-dark-900 mb-4 py-2 px-4 items-center rounded-sm before:block before:absolute before:w-2 relative before:top-0 before:left-0 before:bg-green-900 before:h-full before:text-green-900 before:rounded-l-sm">
                        <button className="text-white">
                            {/* <div className="bg-green-900 w-1 h-full"></div> */}
                            <span>Mesa 25</span>
                        </button>
                    </section>
                    <section className="flex bg-dark-900 mb-4 py-2 px-4 items-center rounded-sm before:block before:absolute before:w-2 relative before:top-0 before:left-0 before:bg-green-900 before:h-full before:text-green-900 before:rounded-l-sm">
                        <button className="text-white">
                            {/* <div className="bg-green-900 w-1 h-full"></div> */}
                            <span>Mesa 12</span>
                        </button>
                    </section>
                    <section className="flex bg-dark-900 mb-4 py-2 px-4 items-center rounded-sm before:block before:absolute before:w-2 relative before:top-0 before:left-0 before:bg-green-900 before:h-full before:text-green-900 before:rounded-l-sm">
                        <button className="text-white">
                            {/* <div className="bg-green-900 w-1 h-full"></div> */}
                            <span>Mesa 97</span>
                        </button>
                    </section>
                    
                </article>
            </main>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})