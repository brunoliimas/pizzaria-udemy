import { useState, FormEvent } from 'react';

import Head from 'next/head';
import Link from 'next/link';

import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';

export default function SignUp() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    async function handleSignUp(event: FormEvent) {
        event.preventDefault();

        if (name === '' || email === '' || password === '') {
            alert("Preencha todos os campos")
            return;
        }

        setLoading(true)
    }

    return (
        <>
            <Head>
                <title>CiaoPizzaria - Faça seu cadastro</title>
            </Head>
            <main className="h-screen flex flex-col items-center justify-center px-10 py-5">
                <Logo />
                <h1 className="mb-4 text-2xl font-bold text-white">Cadastrar</h1>
                <div className="w-full max-w-xs">
                    <form
                        onSubmit={handleSignUp}
                        className="flex flex-col items-center justify-center"
                    >
                        <Input
                            type="text"
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            loading={loading}
                        >
                            Cadastrar
                        </Button>

                        <Link className="text-white mt-4 cursor-pointer" href="/">
                            Já tem uma conta? <span className="underline">Entrar</span>
                        </Link>
                    </form>
                </div>
            </main>
        </>
    )
}
