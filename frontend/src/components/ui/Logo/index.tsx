import Image from "next/image"

import logoImg from '../../../../public/assets/tab-logo.svg'


export function Logo(){
    return(
        <Image priority src={logoImg} width={150} alt="Pizzaria Comanda" />
    )
}