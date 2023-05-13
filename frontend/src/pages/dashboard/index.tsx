import { useState } from "react"
import Modal from 'react-modal';
import { FiRefreshCcw } from 'react-icons/fi'

import Head from "next/head"

import { canSSRAuth } from "@/utils/canSSRAuth"
import { setupAPIClient } from "@/services/api"
import Header from "@/components/Header"
import { ModalOrder } from "@/components/ModalOrder";

type OrderProps = {
    id: string;
    table: string | number;
    status: boolean;
    draft: boolean;
    name: string | null;
}

interface HomeProps {
    orders: OrderProps[];
}

export type OrderItemProps = {
    id: string;
    amount: number;
    order_id: string;
    product_id: string;
    product: {
        id: string;
        name: string;
        description: string;
        price: string;
        banner: string;
    }
    order: {
        id: string;
        table: string | number;
        status: boolean;
        name: string | null;
    }
}

export default function Dashboard({ orders }: HomeProps) {

    const [orderList, setOrderList] = useState(orders || []);
    const [modalItem, setModalItem] = useState<OrderItemProps[]>([])
    const [modalVisible, setModalVisible] = useState(false)

    function handleCloseModal() {
        setModalVisible(false);
    }

    async function handleOpenModalView(id: string) {
        const apiClient = setupAPIClient();

        const response = await apiClient.get('/order/detail', {
            params: {
                order_id: id,
            }
        });

        setModalItem(response.data);
        setModalVisible(true);

    }


    Modal.setAppElement('#__next')
    return (
        <>
            <Head>
                <title>Pizzaria Comanda - Início</title>
            </Head>
            <Header />
            <main className="container mx-auto max-w-2xl px-10 py-5">
                <div className="flex items-center justify-between">
                    <h1 className="mb-8 text-4xl font-bold text-white">Últimos Pedidos</h1>
                    <button>
                        <FiRefreshCcw size={25} color="#22b573" />
                    </button>
                </div>
                <article className="flex flex-col my-4">
                    {orderList.map(item => (
                        <section key={item.id} className="flex bg-dark-900 mb-4 py-2 px-4 items-center rounded-sm before:block before:absolute before:w-2 relative before:top-0 before:left-0 before:bg-green-900 before:h-full before:text-green-900 before:rounded-l-sm">
                            <button onClick={() => handleOpenModalView(item.id)} className="text-white">
                                <span>Mesa {item.table}</span>
                            </button>
                        </section>
                    ))}
                </article>
            </main>

            {modalVisible && (
                <ModalOrder
                    isOpen={modalVisible}
                    onRequestClose={handleCloseModal}
                    order={modalItem} />
            )}
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx: any) => {
    const apiClient = setupAPIClient(ctx);

    const response = await apiClient.get('/orders');

    // console.log(response.data);

    return {
        props: {
            orders: response.data
        }
    }
})