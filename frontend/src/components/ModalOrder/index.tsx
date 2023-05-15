import Modal from "react-modal"

import { FiX } from "react-icons/fi"

import { OrderItemProps } from "../../pages/dashboard"

interface ModalOrderProps {
    isOpen: boolean;
    onRequestClose: () => void;
    order: OrderItemProps[];
    handleFinishOrder: (id: string) => void

}

export function ModalOrder({ isOpen, onRequestClose, order, handleFinishOrder }: ModalOrderProps) {


    const customStyles = {

        overlay: {
            backgroundColor: 'rgba(70, 70, 70, 0.75)'
        },
        content: {
            width: '90%',
            maxWidth: '592px',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: '10px 20px',
            borderRadius: '.5rem',
            transform: 'translate(-50%, -50%)',
            background: '#101026',

        },
    };

    const table = order[0]?.order?.table || '';
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            className="relative">
            <button
                type="button"
                onClick={onRequestClose}
                className="absolute top-2 right-2">
                <FiX size={40} color="#ed1b24" />
            </button>

            <div className="text-white">
                <h2 className="text-2xl font-bold">Detalhes do Pedido</h2>
                <span>Mesa: </span>
                <span className="text-xl text-green-900 font-bold">{table}</span>
                <div className="flex bg-dark-700 mt-4 text-sm">
                    <div className="w-[10%] px-2 py-1 border border-dark-900">QTD</div>
                    <div className="w-[30%] px-2 py-1 border border-dark-900">Produto</div>
                    <div className="w-[40%] px-2 py-1 border border-dark-900">Detalhes</div>
                    <div className="w-[20%] px-2 py-1 border border-dark-900">Preço</div>
                </div>
                {order.map(item => (
                    <section key={item.id} className="flex text-sm">
                        <span className="w-[10%] px-2 py-1 border border-dark-700">{item.amount}</span>
                        <span className="w-[30%] px-2 py-1 border border-dark-700 font-bold">{item.product.name}</span>
                        <span className="w-[40%] px-2 py-1 border border-dark-700 break-words italic">{item.product.description}</span>
                        <span className="w-[20%] px-2 py-1 border border-dark-700">{item.product.price}</span>
                    </section>
                ))}

                <button
                    onClick={() => handleFinishOrder(order[0].order_id)}
                    className="my-4 font-bold bg-green-900 rounded-md hover:brightness-150 hover:text-dark-900 py-2 px-8 transition-all duration-200 ease-in flex justify-center">
                    Concluir Pedido
                </button>
            </div>

        </Modal>
    )
};