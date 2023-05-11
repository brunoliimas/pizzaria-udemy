import {useState, ChangeEvent} from 'react'
import Head from "next/head"

import { canSSRAuth } from '@/utils/canSSRAuth';
import Header from "@/components/Header";

import { FiUpload } from 'react-icons/fi'

export default function Product() {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState<File | null>(null);

    function handleFile(e: ChangeEvent<HTMLInputElement>){
        if(!e.target.files){
            return;
        }

        const image = e.target.files[0];

        if(!image){
            return;
        }

        if(image.type === 'image/jpeg' || image.type === 'image/png'){
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(e.target.files[0]))
        }
    }

    return (
        <>
            <Head>
                <title>Pizzaria Comanda - Nova Categoria</title>
            </Head>
            <Header />
            <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-16">
                <h1 className="text-white text-4xl font-bold mb-10 text-center">Cadastrar novo produto</h1>

                <form className="flex flex-col w-full md:w-1/2 max-w-[600px]">

                    <label className="w-full h-[220px] flex items-center justify-center mb-4 rounded-sm bg-dark-900 border border-gray-100 cursor-pointer overflow-hidden">
                        <span className="z-50 absolute opacity-50 transition-all duration-500 hover:scale-150 hover:opacity-100">
                            <FiUpload size={30} color="#fff" />
                        </span>
                        <input className="hidden" type="file" accept="image/png, image/jpeg" onChange={handleFile} />

                        {avatarUrl && (
                            <img
                            className='w-full'
                            src={avatarUrl}
                            alt="Foto do produto"/>
                        )}
                    </label>


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