import Link from "next/link"
import { Logo } from "../ui/Logo"

import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from "@/contexts/AuthContext"
import { useContext } from "react"


export default function Header() {
    const { signOut } = useContext(AuthContext);

    return (
        <header className="px-4 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/dashboard">
                    <Logo />
                </Link>

                <nav className="text-white flex items-center">
                    <Link className="mr-4 hover:text-red-900 transition-all duration-500" href="/category">
                        Categoria
                    </Link>

                    <Link className="mr-4 hover:text-red-900 transition-all duration-500" href="/products">
                        Cardápio
                    </Link>

                    <button onClick={signOut} className="mb-2 hover:scale-125 transition-all duration-500">
                        <FiLogOut color="#fff" size={22} />
                    </button>
                </nav>
            </div>
        </header>
    )
}