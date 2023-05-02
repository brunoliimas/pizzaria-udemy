import Head from "next/head"
import Image from "next/image"

import logoImg from '../../public/assets/tab-logo.svg'
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/Button"

export default function Home() {
  return (
    <>
      <Head>
        <title>CiaoPizzaria - Faça seu login</title>
      </Head>
      <main className="h-screen flex flex-col items-center justify-center">
        <Image className="mb-5" src={logoImg} width={200} alt="Tab" />
        <div>
          <form className="flex flex-col items-center justify-center">
            <Input type="text" placeholder="Digite seu e-mail" />
            <Input type="password" placeholder="Digite sua senha" />
            <Button
              type="submit"
              loading={false}
            >
              Acessar
            </Button>
          </form>
        </div>
      </main>
    </>
  )
}
