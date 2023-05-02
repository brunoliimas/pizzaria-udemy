import { ReactNode, ButtonHTMLAttributes } from 'react';


import { AiOutlineLoading3Quarters } from 'react-icons/ai'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    children: ReactNode
}

export function Button({ loading, children, ...rest }: ButtonProps) {
    return (
        <button
            className="w-full bg-red-900 rounded-md hover:brightness-150 py-2 px-8 transition-all duration-200 ease-in"
            disabled={loading}
            {...rest}>
            {
                loading ? (
                    
                    <AiOutlineLoading3Quarters className='animate-spin' color='#fff' size={16} />
                ) : (
                    <a
                        className="text-white">
                        {children}
                    </a>
                )}

        </button>
    )
}