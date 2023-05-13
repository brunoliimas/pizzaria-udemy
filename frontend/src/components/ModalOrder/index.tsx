import Modal from "react-modal"

import { FiX } from "react-icons/fi"

import { OrderItemProps } from "../../pages/dashboard"

interface ModalOrderProps {
    isOpen: boolean;
    onRequestClose: () => void;
    order: OrderItemProps[];

}

export function ModalOrder({ isOpen, onRequestClose, order }: ModalOrderProps) {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: '10px 20px',
            borderRadius: '.5rem',
            transform: 'translate(-50%, -50%)',
            background: '#101026'
        },
    };

    const table = order[0]?.order?.table || '';
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}>
            <button
                type="button"
                onClick={onRequestClose}
                className="">
                <FiX size={40} color="#ed1b24" />
            </button>

            <div className="text-white">
                <h2 className="text-2xl font-bold">Detalhes do Pedido</h2>
                <span>Mesa: </span>
                <span className="text-xl font-bold">{table}</span>
                <div className="flex bg-dark-700 mt-4">
                    <div className="w-1/5 px-2 py-1 border border-dark-900">QTD</div>
                    <div className="w-2/5 px-2 py-1 border border-dark-900">Produto</div>
                    <div className="w-2/5 px-2 py-1 border border-dark-900">Detalhes</div>
                </div>
                {order.map(item => (
                    <section key={item.id} className="flex">
                        <span className="w-1/5 px-2 py-1 border border-dark-700">{item.amount}</span>
                        <span className="w-2/5 px-2 py-1 border border-dark-700">{item.product.name}</span>
                        <span className="w-2/5 px-2 py-1 border border-dark-700">{item.product.description}</span>
                    </section>
                ))}
            </div>

        </Modal>
    )
};