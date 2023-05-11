import { useState, ChangeEvent } from 'react';
import Head from 'next/head';

import { canSSRAuth } from '@/utils/canSSRAuth';
import Header from '@/components/Header';

import { FiUpload } from 'react-icons/fi';
import { setupAPIClient } from '@/services/api';

interface ItemProps {
    id: string;
    name: string;
}

interface CategoryProps {
    categoryList: ItemProps[];
}

export default function Product({ categoryList }: CategoryProps) {
    const [avatarUrl, setAvatarUrl] = useState('');
    const [imageAvatar, setImageAvatar] = useState<File | null>(null);
    const [categories, setCategories] = useState<ItemProps[]>(categoryList || []);
    const [categorySelected, setCategorySelected] = useState<number>(0);

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        const files = e.target.files;
        if (!files) return;

        const image = files[0];
        if (!image) return;

        const isImageFileType = image.type === 'image/jpeg' || image.type === 'image/png';
        if (isImageFileType) {
            setImageAvatar(image);
            setAvatarUrl(URL.createObjectURL(image));
        }
    }

    function handleCategoryChange(e: ChangeEvent<HTMLSelectElement>) {
        const selectedIndex = Number(e.target.value);
        setCategorySelected(selectedIndex);
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
                        <input className="hidden" type="file" accept="image/png, image/jpeg" onChange={handleFileChange} />

                        {avatarUrl && (
                            <img
                                className='w-full'
                                src={avatarUrl}
                                alt="Foto do produto" />
                        )}
                    </label>


                    <select
                        onChange={handleCategoryChange}
                        value={categorySelected}
                        className="w-full mb-4 rounded-sm bg-dark-900 text-white p-4 border border-gray-100 placeholder:text-white placeholder:opacity-50" >
                        {categories.map((item, index) => {
                            return (
                                <option key={item.id} value={String(index)}>
                                    {item.name}
                                </option>
                            )
                        })}
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
export const getServerSideProps = canSSRAuth(async (ctx: any) => {
    const apliClient = setupAPIClient(ctx);

    const response: any = await apliClient.get('/category');

    return {
        props: {
            categoryList: response.data
        }
    };
});