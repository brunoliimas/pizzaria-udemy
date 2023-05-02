import Image from "next/image"

import logoImg from '../../../../public/assets/tab-logo.svg'


export function Logo(){
    return(
        <Image className="mb-4" src={logoImg} width={200} alt="Tab" />
    )
}