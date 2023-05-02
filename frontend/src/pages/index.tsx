import Head from "next/head"
import Image from "next/image"

import logoImg from '../../public/assets/tab-logo.svg'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

export default function Home() {
  return (
    <>
      <Head>
        <title>CiaoPizzaria - Faça seu login</title>
      </Head>
      <main className="h-screen flex flex-col items-center justify-center px-10 py-5">
        <Image className="mb-4" src={logoImg} width={200} alt="Tab" />
        <div className="w-full max-w-xs">
          <form className="flex flex-col items-center justify-center">
            <Input type="text" placeholder="Digite seu e-mail" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>

            <a className="text-white mt-4 cursor-pointer">Não possui uma conta? Cadastre-se</a>
          </form>
        </div>
      </main>
    </>
  )
}
